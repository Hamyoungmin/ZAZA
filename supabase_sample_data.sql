-- 샘플 데이터 삽입

-- 1. 샘플 회원 데이터
INSERT INTO users (email, name, phone, grade, status, total_spent, reservation_count) VALUES
('kim@example.com', '김철수', '010-1234-5678', 'VIP', '활동', 15200000, 12),
('lee@example.com', '이영희', '010-2345-6789', 'VVIP', '활동', 42000000, 28),
('park@example.com', '박민수', '010-3456-7890', '일반', '활동', 2800000, 3),
('jung@example.com', '정수진', '010-4567-8901', 'VIP', '활동', 8500000, 8),
('choi@example.com', '최동욱', '010-5678-9012', '일반', '휴면', 1200000, 1);

-- 2. 샘플 여행 상품 데이터
INSERT INTO products (name, category, description, price, duration, stock, status, sales_count, image_url, country) VALUES
('제주도 3박4일 패키지', '국내여행', '아름다운 제주도에서 힐링하세요', 850000, '3박4일', 24, '판매중', 156, '/travel1.jpg', '한국'),
('일본 도쿄 5일 자유여행', '일본', '도쿄의 매력을 마음껏 즐기세요', 1200000, '5일', 18, '판매중', 142, '/travel2.jpg', '일본'),
('베트남 다낭 4박5일', '동남아', '아름다운 해변 도시 다낭', 720000, '4박5일', 0, '품절', 128, '/travel3.jpg', '베트남'),
('태국 푸켓 5박6일', '동남아', '열대 낙원 푸켓에서의 휴가', 980000, '5박6일', 30, '판매중', 98, '/circle1.jpg', '태국'),
('미국 서부 7일 패키지', '미주', 'LA, 라스베가스, 그랜드캐년', 2500000, '7일', 12, '판매중', 76, '/circle2.jpg', '미국'),
('중국 상하이 4일', '중국', '동양의 파리 상하이 여행', 650000, '4일', 20, '판매중', 45, '/circle3.jpg', '중국');

-- 3. 샘플 예약 데이터
INSERT INTO reservations (user_id, product_id, customer_name, customer_phone, customer_email, travel_date, passengers, total_amount, status) 
SELECT 
  u.id, 
  p.id,
  u.name,
  u.phone,
  u.email,
  CURRENT_DATE + INTERVAL '15 days',
  2,
  p.price * 2,
  '예약 확정'
FROM users u, products p 
WHERE u.email = 'kim@example.com' AND p.name = '제주도 3박4일 패키지'
LIMIT 1;

INSERT INTO reservations (user_id, product_id, customer_name, customer_phone, customer_email, travel_date, passengers, total_amount, status) 
SELECT 
  u.id, 
  p.id,
  u.name,
  u.phone,
  u.email,
  CURRENT_DATE + INTERVAL '20 days',
  1,
  p.price,
  '결제 완료'
FROM users u, products p 
WHERE u.email = 'lee@example.com' AND p.name = '일본 도쿄 5일 자유여행'
LIMIT 1;

-- 4. 샘플 결제 데이터
INSERT INTO payments (reservation_id, user_id, amount, method, status, transaction_id)
SELECT 
  r.id,
  r.user_id,
  r.total_amount,
  '카드',
  '완료',
  'TXN' || LPAD(FLOOR(RANDOM() * 1000000)::TEXT, 6, '0')
FROM reservations r
WHERE r.status IN ('예약 확정', '결제 완료')
LIMIT 5;

-- 5. 샘플 리뷰 데이터
INSERT INTO reviews (user_id, product_id, rating, title, content, status)
SELECT 
  u.id,
  p.id,
  5,
  '정말 좋은 여행이었어요!',
  '가족들과 함께한 최고의 여행이었습니다. 강력 추천합니다!',
  '승인'
FROM users u, products p
WHERE u.email = 'kim@example.com' AND p.name = '제주도 3박4일 패키지'
LIMIT 1;

-- 6. 샘플 문의 데이터
INSERT INTO inquiries (user_id, name, email, phone, category, title, content, status) VALUES
((SELECT id FROM users WHERE email = 'park@example.com'), '박민수', 'park@example.com', '010-3456-7890', '상품문의', '제주도 패키지 관련 문의', '출발 날짜 변경이 가능한가요?', '미답변'),
((SELECT id FROM users WHERE email = 'jung@example.com'), '정수진', 'jung@example.com', '010-4567-8901', '예약문의', '환불 관련 문의', '예약 취소 시 환불 규정이 궁금합니다.', '미답변');

-- 7. 샘플 FAQ 데이터
INSERT INTO faqs (category, question, answer, display_order, is_active) VALUES
('예약', '예약은 어떻게 하나요?', '원하시는 여행 상품을 선택하신 후 예약하기 버튼을 클릭하여 예약을 진행하실 수 있습니다.', 1, true),
('결제', '어떤 결제 수단을 사용할 수 있나요?', '신용카드, 계좌이체, 가상계좌, 간편결제(카카오페이, 네이버페이 등)를 이용하실 수 있습니다.', 2, true),
('취소', '예약 취소는 어떻게 하나요?', '마이페이지에서 예약 내역을 확인하신 후 취소 신청이 가능합니다. 취소 수수료는 출발일 기준으로 차등 적용됩니다.', 3, true),
('환불', '환불은 얼마나 걸리나요?', '취소 신청 후 영업일 기준 3-5일 이내에 환불 처리됩니다.', 4, true);

-- 8. 샘플 배너 데이터
INSERT INTO banners (title, image_url, link_url, display_order, start_date, end_date, is_active) VALUES
('제주도 특가 프로모션', '/Main.png', '/detail', 1, CURRENT_DATE, CURRENT_DATE + INTERVAL '30 days', true),
('일본 여행 할인 이벤트', '/Main(Right).png', '/japan', 2, CURRENT_DATE, CURRENT_DATE + INTERVAL '30 days', true);

-- 9. 샘플 공지사항 데이터
INSERT INTO notices (title, content, is_important, views) VALUES
('홈페이지 오픈 안내', '여행 웹사이트가 새롭게 오픈했습니다. 다양한 할인 혜택을 만나보세요!', true, 150),
('연말 특가 이벤트', '연말을 맞아 다양한 여행 상품을 특가로 제공합니다.', false, 89);

-- 10. 샘플 쿠폰 데이터
INSERT INTO coupons (code, name, discount_type, discount_value, min_purchase_amount, start_date, end_date, quantity, is_active) VALUES
('WELCOME2024', '신규 회원 환영 쿠폰', '정액', 50000, 500000, CURRENT_DATE, CURRENT_DATE + INTERVAL '90 days', 1000, true),
('WINTER20', '겨울 여행 20% 할인', '정률', 20, 300000, CURRENT_DATE, CURRENT_DATE + INTERVAL '60 days', 500, true);

