import { createClient } from '@/lib/supabase-server';
import { NextResponse } from 'next/server';

// GET: 모든 결제 조회
export async function GET(request: Request) {
  try {
    const supabase = createClient();
    const { searchParams } = new URL(request.url);
    
    const status = searchParams.get('status');
    const method = searchParams.get('method');
    const search = searchParams.get('search');

    let query = supabase
      .from('payments')
      .select(`
        *,
        reservation:reservations(
          customer_name,
          customer_phone,
          product:products(name)
        )
      `)
      .order('created_at', { ascending: false });

    // 필터 적용
    if (status && status !== '전체') {
      query = query.eq('status', status);
    }
    if (method && method !== '전체') {
      query = query.eq('method', method);
    }

    const { data, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // 검색 필터는 클라이언트에서 적용 (복잡한 관계 쿼리)
    let filteredData = data;
    if (search) {
      filteredData = data?.filter((payment: any) => 
        payment.reservation?.customer_name?.toLowerCase().includes(search.toLowerCase()) ||
        payment.reservation?.product?.name?.toLowerCase().includes(search.toLowerCase())
      );
    }

    return NextResponse.json(filteredData);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PUT: 결제 상태 수정
export async function PUT(request: Request) {
  try {
    const supabase = createClient();
    const body = await request.json();
    const { id, ...updateData } = body;

    const { data, error } = await supabase
      .from('payments')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

