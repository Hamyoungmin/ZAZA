# Supabase 설정 가이드

## 1. Supabase 프로젝트 생성

1. [https://app.supabase.com](https://app.supabase.com) 접속
2. 로그인 또는 회원가입
3. "New Project" 클릭
4. 프로젝트 정보 입력:
   - Name: 원하는 프로젝트 이름
   - Database Password: 강력한 비밀번호 (저장해두세요!)
   - Region: Northeast Asia (Seoul) - 한국과 가장 가까운 서버
5. "Create new project" 클릭 (생성에 1-2분 소요)

## 2. API 키 가져오기

1. 프로젝트 대시보드에서 좌측 메뉴의 ⚙️ **Settings** 클릭
2. **API** 탭 클릭
3. 다음 두 값을 복사:
   - **Project URL** (예: `https://xxxxx.supabase.co`)
   - **anon public** key (긴 문자열)

## 3. 환경 변수 설정

프로젝트 루트의 `.env.local` 파일을 열고 복사한 값을 입력:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=여기에_anon_key_붙여넣기
```

## 4. 테이블 생성 예제

Supabase 대시보드에서:

1. 좌측 메뉴의 🗄️ **Table Editor** 클릭
2. **New table** 클릭
3. 테이블 정보 입력:

### 예제: "posts" 테이블

```sql
create table posts (
  id bigint primary key generated always as identity,
  title text not null,
  content text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Row Level Security (RLS) 활성화
alter table posts enable row level security;

-- 모든 사용자가 읽을 수 있도록 정책 추가
create policy "Posts are viewable by everyone"
  on posts for select
  using (true);
```

## 5. 연결 테스트

개발 서버 실행 후:

```bash
npm run dev
```

브라우저에서 다음 URL 접속:
- http://localhost:3000/api/test-supabase

성공 메시지가 나오면 연결 완료!

## 6. 사용 예제

### 클라이언트 컴포넌트에서 사용:

```typescript
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
```

### 커스텀 훅 사용:

```typescript
'use client';

import { useSupabaseData } from '@/hooks/useSupabase';

export default function PostsList() {
  const { data: posts, loading, error } = useSupabaseData('posts');

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error.message}</div>;

  return (
    <div>
      {posts?.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}
```

## 7. 주요 Supabase 기능

### 데이터 조회
```typescript
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .eq('id', 1);
```

### 데이터 삽입
```typescript
const { data, error } = await supabase
  .from('posts')
  .insert({ title: '새 글', content: '내용' });
```

### 데이터 수정
```typescript
const { data, error } = await supabase
  .from('posts')
  .update({ title: '수정된 제목' })
  .eq('id', 1);
```

### 데이터 삭제
```typescript
const { data, error } = await supabase
  .from('posts')
  .delete()
  .eq('id', 1);
```

### 실시간 구독
```typescript
const channel = supabase
  .channel('posts_changes')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'posts' },
    (payload) => {
      console.log('변경 감지:', payload);
    }
  )
  .subscribe();
```

## 참고 자료

- [Supabase 공식 문서](https://supabase.com/docs)
- [Next.js + Supabase 가이드](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase JavaScript 클라이언트](https://supabase.com/docs/reference/javascript/introduction)

