'use client';

import { useRouter } from 'next/navigation';
import styles from './notice-list.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const noticeData = [
  {
    id: 1,
    title: '겨울 시즌 특별 할인 이벤트',
    content: '겨울 시즌 특별 할인 이벤트가 시작되었습니다. 11월 말까지 모든 여행 상품 최대 40% 할인!',
    date: '2024-11-22',
    category: '이벤트',
    important: true,
  },
  {
    id: 2,
    title: '제주도 패키지 여행 신규 코스 추가',
    content: '제주도 패키지 여행 신규 코스가 추가되었습니다. 숨은 명소와 맛집을 함께 즐겨보세요.',
    date: '2024-11-19',
    category: '상품 안내',
    important: false,
  },
  {
    id: 3,
    title: '연말연시 해외여행 예약 안내',
    content: '연말연시 해외여행 예약이 조기 마감될 수 있으니 서둘러 예약해주세요.',
    date: '2024-11-16',
    category: '예약 안내',
    important: true,
  },
  {
    id: 4,
    title: '일본 벚꽃 시즌 2025년 상품 사전 예약',
    content: '일본 벚꽃 시즌 2025년 상품 사전 예약이 오픈되었습니다. 얼리버드 특가 혜택!',
    date: '2024-11-13',
    category: '사전 예약',
    important: false,
  },
  {
    id: 5,
    title: '홈페이지 리뉴얼 기념 이벤트',
    content: '홈페이지 리뉴얼 기념 이벤트! 첫 예약 고객님께 추가 5% 할인 쿠폰을 드립니다.',
    date: '2024-11-10',
    category: '이벤트',
    important: false,
  },
];

export default function NoticeListPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Header />
      
      <div className={styles.contentWrapper}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>공지(Notice)</h1>
          <p className={styles.pageSubtitle}>오똘 여행사의 중요 공지사항을 확인하세요</p>
        </div>

        <div className={styles.noticeList}>
          {noticeData.map((notice) => (
            <div 
              key={notice.id} 
              className={styles.noticeCard}
              onClick={() => router.push(`/notice/${notice.id}`)}
            >
              <div className={styles.cardHeader}>
                <div className={styles.badges}>
                  <span className={styles.category}>{notice.category}</span>
                  {notice.important && <span className={styles.importantBadge}>중요</span>}
                </div>
                <span className={styles.date}>{notice.date}</span>
              </div>
              <h2 className={styles.noticeTitle}>{notice.title}</h2>
              <p className={styles.noticeContent}>{notice.content}</p>
              <div className={styles.readMore}>
                자세히 보기 →
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

