# ZAZA 여행 웹사이트 - Supabase 연동 가이드

## 📋 목차
1. [Supabase 설정](#supabase-설정)
2. [데이터베이스 스키마 생성](#데이터베이스-스키마-생성)
3. [환경 변수 설정](#환경-변수-설정)
4. [샘플 데이터 삽입](#샘플-데이터-삽입)
5. [API 엔드포인트](#api-엔드포인트)
6. [사용 방법](#사용-방법)

---

## 🚀 Supabase 설정

### 1. Supabase 프로젝트 생성
1. [Supabase](https://supabase.com) 접속 후 로그인
2. "New Project" 클릭
3. 프로젝트 이름, 데이터베이스 비밀번호 설정
4. 리전 선택 (가까운 지역 선택)
5. "Create new project" 클릭

### 2. API 키 확인
프로젝트 생성 후:
- Settings → API 메뉴로 이동
- `Project URL` 확인
- `anon public` 키 확인
- `service_role` 키 확인 (관리자용)

---

## 🗄️ 데이터베이스 스키마 생성

### 1. SQL Editor에서 스키마 실행

Supabase 대시보드에서:
1. SQL Editor 메뉴 클릭
2. "New query" 클릭
3. `supabase_schema.sql` 파일 내용 복사 붙여넣기
4. "Run" 버튼 클릭

### 2. 스키마 확인

생성된 테이블:
- ✅ users (회원)
- ✅ products (여행 상품)
- ✅ reservations (예약)
- ✅ payments (결제)
- ✅ reviews (리뷰)
- ✅ inquiries (문의)
- ✅ faqs (FAQ)
- ✅ banners (배너)
- ✅ notices (공지사항)
- ✅ coupons (쿠폰)

---

## 🔐 환경 변수 설정

### 1. `.env.local` 파일 생성

프로젝트 루트에 `.env.local` 파일 생성:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 2. 값 입력

Supabase 대시보드에서 복사한 값으로 교체:
- `your-project`: 실제 프로젝트 ID
- `your-anon-key`: anon public 키
- `your-service-role-key`: service_role 키

⚠️ **주의**: `.env.local`은 `.gitignore`에 포함되어 있어 Git에 커밋되지 않습니다.

---

## 📊 샘플 데이터 삽입

### 1. 샘플 데이터 실행

SQL Editor에서:
1. `supabase_sample_data.sql` 파일 내용 복사
2. SQL Editor에 붙여넣기
3. "Run" 버튼 클릭

### 2. 데이터 확인

Table Editor에서 각 테이블의 데이터 확인:
- 5명의 샘플 회원
- 6개의 여행 상품
- 예약 및 결제 내역
- 리뷰, 문의, FAQ 등

---

## 🔌 API 엔드포인트

### 관리자 페이지 API

#### 1. 대시보드
```
GET /api/dashboard
```
**응답**:
```json
{
  "stats": {
    "todayReservations": 24,
    "todaySales": 15840000,
    "newMembers": 12,
    "pendingInquiries": 8
  },
  "recentReservations": [...],
  "popularProducts": [...]
}
```

#### 2. 상품 관리
```
GET    /api/products                    # 전체 상품 조회
GET    /api/products?status=판매중       # 필터링
GET    /api/products?search=제주          # 검색
POST   /api/products                    # 상품 등록
PUT    /api/products                    # 상품 수정
DELETE /api/products?id={product_id}   # 상품 삭제
```

#### 3. 예약 관리
```
GET /api/reservations                  # 전체 예약 조회
GET /api/reservations?status=예약확정  # 필터링
POST /api/reservations                 # 예약 등록
PUT /api/reservations                  # 예약 수정
```

#### 4. 회원 관리
```
GET /api/users                         # 전체 회원 조회
GET /api/users?grade=VIP               # 등급별 필터
GET /api/users?status=활동             # 상태별 필터
PUT /api/users                         # 회원 정보 수정
```

#### 5. 결제 관리
```
GET /api/payments                      # 전체 결제 조회
GET /api/payments?status=완료          # 상태별 필터
GET /api/payments?method=카드          # 결제수단별 필터
PUT /api/payments                      # 결제 상태 수정
```

---

## 💡 사용 방법

### 1. 개발 서버 실행

```bash
npm run dev
```

### 2. 관리자 페이지 접속

```
http://localhost:3000/admin
```

### 3. 기능별 사용

#### ✅ 대시보드
- 실시간 통계 확인
- 최근 예약 현황
- 인기 상품 TOP 5

#### ✅ 상품 관리
- 상품 목록 확인
- 검색 및 필터링
- 상품 등록/수정/삭제

#### ✅ 예약 관리
- 예약 목록 확인
- 예약 상태 변경
- 예약 상세 정보 조회

#### ✅ 회원 관리
- 회원 목록 확인
- 회원 등급 관리
- 회원 정보 수정

#### ✅ 결제 관리
- 결제 내역 조회
- 결제 상태 확인
- 환불 처리

---

## 🛠️ 커스터마이징

### 1. 테이블 수정

필요한 필드 추가:
```sql
ALTER TABLE products ADD COLUMN new_field VARCHAR(255);
```

### 2. API 엔드포인트 수정

`src/app/api/` 폴더의 파일들을 수정하여 기능 추가 가능

### 3. 페이지 커스터마이징

`src/app/admin/` 폴더의 컴포넌트들을 수정하여 UI 변경 가능

---

## 🔒 보안 설정

### 1. RLS (Row Level Security) 활성화

모든 테이블에 RLS가 활성화되어 있습니다.

### 2. 인증 추가 (선택사항)

Supabase Auth를 사용하여 관리자 로그인 기능 추가 가능:

```typescript
import { createClient } from '@/lib/supabase-client';

const supabase = createClient();
await supabase.auth.signInWithPassword({
  email: 'admin@example.com',
  password: 'password',
});
```

---

## 📝 참고사항

### 데이터 타입
- `UUID`: 고유 ID
- `VARCHAR`: 문자열
- `TEXT`: 긴 텍스트
- `BIGINT`: 큰 숫자 (가격, 금액)
- `INT`: 정수
- `TIMESTAMP`: 날짜/시간
- `BOOLEAN`: true/false

### 이모티콘 제거 완료
- 모든 관리자 페이지에서 이모티콘 제거됨
- 깔끔한 텍스트 기반 UI로 변경

### 성능 최적화
- 인덱스가 자동으로 생성되어 있음
- 자주 사용되는 쿼리는 최적화됨

---

## 🐛 문제 해결

### 연결 오류
```
Error: Failed to fetch
```
→ `.env.local` 파일의 Supabase URL과 키 확인

### CORS 에러
```
CORS policy error
```
→ Supabase 대시보드에서 Authentication → URL Configuration 확인

### 데이터 조회 안 됨
```
No data returned
```
→ SQL Editor에서 샘플 데이터가 삽입되었는지 확인

---

## 📞 지원

문제가 발생하면:
1. 브라우저 콘솔 확인
2. Supabase 대시보드에서 Logs 확인
3. `.env.local` 설정 재확인

---

## ✅ 체크리스트

- [ ] Supabase 프로젝트 생성
- [ ] 데이터베이스 스키마 실행
- [ ] 환경 변수 설정
- [ ] 샘플 데이터 삽입
- [ ] 개발 서버 실행
- [ ] 관리자 페이지 접속 확인
- [ ] 각 기능 테스트

모든 단계를 완료하면 Supabase 연동이 완료됩니다! 🎉

