import { createClient } from '@/lib/supabase-server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = createClient();
    const today = new Date().toISOString().split('T')[0];

    // 오늘의 예약 수
    const { count: todayReservations } = await supabase
      .from('reservations')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', today);

    // 오늘의 매출 (완료된 결제만)
    const { data: todayPayments } = await supabase
      .from('payments')
      .select('amount')
      .eq('status', '완료')
      .gte('created_at', today);

    const todaySales = todayPayments?.reduce((sum, p) => sum + p.amount, 0) || 0;

    // 신규 회원 (오늘 가입)
    const { count: newMembers } = await supabase
      .from('users')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', today);

    // 미답변 문의
    const { count: pendingInquiries } = await supabase
      .from('inquiries')
      .select('*', { count: 'exact', head: true })
      .eq('status', '미답변');

    // 최근 예약 현황
    const { data: recentReservations } = await supabase
      .from('reservations')
      .select(`
        *,
        product:products(name)
      `)
      .order('created_at', { ascending: false })
      .limit(5);

    // 인기 상품 TOP 5
    const { data: popularProducts } = await supabase
      .from('products')
      .select('*')
      .order('sales_count', { ascending: false })
      .limit(5);

    return NextResponse.json({
      stats: {
        todayReservations: todayReservations || 0,
        todaySales,
        newMembers: newMembers || 0,
        pendingInquiries: pendingInquiries || 0,
      },
      recentReservations,
      popularProducts,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

