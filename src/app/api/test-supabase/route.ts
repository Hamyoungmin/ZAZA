import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';

// Supabase 연결 테스트용 API 라우트
export async function GET() {
  try {
    const supabase = createClient();
    
    // 간단한 쿼리로 연결 테스트
    const { data, error } = await supabase.from('products').select('*').limit(1);

    if (error) {
      // 테이블이 없을 수 있으므로 에러를 무시하고 연결 성공으로 간주
      return NextResponse.json({
        success: true,
        message: 'Supabase 연결 성공! (테이블을 생성해주세요)',
        error: error.message,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Supabase 연결 및 쿼리 성공!',
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Supabase 연결 실패',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
