# ZAZA 웹사이트

Next.js와 Supabase로 구축된 웹 애플리케이션입니다.

## 시작하기

먼저 의존성 패키지를 설치하세요:

```bash
npm install
```

그 다음 개발 서버를 실행하세요:

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 기술 스택

- **프레임워크**: Next.js 15
- **언어**: TypeScript
- **스타일링**: Tailwind CSS + CSS Modules
- **백엔드**: Supabase
- **데이터베이스**: PostgreSQL (Supabase)

## 프로젝트 구조

```
ZAZA/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── test-supabase/  # Supabase 연결 테스트 API
│   │   ├── layout.tsx          # 루트 레이아웃
│   │   ├── page.tsx            # 홈 페이지
│   │   ├── page.module.css     # 페이지별 CSS
│   │   └── globals.css         # 전역 CSS
│   ├── lib/
│   │   ├── supabase.ts         # Supabase 클라이언트
│   │   └── supabase-server.ts  # 서버용 Supabase 클라이언트
│   └── hooks/
│       └── useSupabase.ts      # Supabase 커스텀 훅
├── .env.local                   # 환경 변수 (Supabase 키)
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── SUPABASE_SETUP.md           # Supabase 설정 가이드
```

## Supabase 설정

자세한 Supabase 설정 방법은 `SUPABASE_SETUP.md` 파일을 참고하세요.

간단 요약:
1. [Supabase](https://app.supabase.com)에서 프로젝트 생성
2. Project URL과 anon key 복사
3. `.env.local` 파일에 키 입력
4. 개발 서버 실행 후 `/api/test-supabase` 접속하여 연결 테스트

## 배포

Vercel을 사용한 배포가 가장 쉽습니다:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

**주의**: 배포 시 Vercel 환경 변수에 Supabase 키를 추가해야 합니다.

