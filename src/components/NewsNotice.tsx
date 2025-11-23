'use client';

import { useState } from 'react';
import styles from './NewsNotice.module.css';

const newsData = [
  {
    id: 1,
    content: '이상은 인생을 보고, 불타일을 무엇을 인생의 희망이며, 끝는 불타일이다.',
    date: '[24-11-23]',
  },
  {
    id: 2,
    content: '미묘한 구할 간지러 가는 인생을 행복스럽고 공이에서 같지 아니올 있다.',
    date: '[24-11-20]',
  },
  {
    id: 3,
    content: '무엇이 수 인류의 열등이 관현아이며, 능히 원다고, 뜸한 하는 대고, 이것이다.',
    date: '[24-11-18]',
  },
  {
    id: 4,
    content: '청춘이 그들은 모래를에 위하여서 뿐이다. 수 노래하며 귀는 피는 있으며, 속에서 가슴에 끊이 이것이다.',
    date: '[24-11-15]',
  },
  {
    id: 5,
    content: '용기가 그것을 가는 끝에 실로 새가 날카로우나 한다. 뜻밭에 더운지라 그들은 능히 우리는 보는 것다.',
    date: '[24-11-12]',
  },
];

const noticeData = [
  {
    id: 1,
    content: '겨울 시즌 특별 할인 이벤트가 시작되었습니다. 11월 말까지 모든 여행 상품 최대 40% 할인!',
    date: '[24-11-22]',
  },
  {
    id: 2,
    content: '제주도 패키지 여행 신규 코스가 추가되었습니다. 숨은 명소와 맛집을 함께 즐겨보세요.',
    date: '[24-11-19]',
  },
  {
    id: 3,
    content: '연말연시 해외여행 예약이 조기 마감될 수 있으니 서둘러 예약해주세요.',
    date: '[24-11-16]',
  },
  {
    id: 4,
    content: '일본 벚꽃 시즌 2025년 상품 사전 예약이 오픈되었습니다. 얼리버드 특가 혜택!',
    date: '[24-11-13]',
  },
  {
    id: 5,
    content: '홈페이지 리뉴얼 기념 이벤트! 첫 예약 고객님께 추가 5% 할인 쿠폰을 드립니다.',
    date: '[24-11-10]',
  },
];

export default function NewsNotice() {
  const [activeTab, setActiveTab] = useState<'news' | 'notice'>('news');

  const currentData = activeTab === 'news' ? newsData : noticeData;

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        {/* 탭 버튼 */}
        <div className={styles.tabButtons}>
          <button
            className={`${styles.tabButton} ${
              activeTab === 'news' ? styles.activeTab : ''
            }`}
            onClick={() => setActiveTab('news')}
          >
            뉴스(News)
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === 'notice' ? styles.activeTab : ''
            }`}
            onClick={() => setActiveTab('notice')}
          >
            공지(Notice)
          </button>
        </div>

        {/* 콘텐츠 리스트 */}
        <div className={styles.contentList}>
          {currentData.map((item) => (
            <div key={item.id} className={styles.listItem}>
              <p className={styles.itemContent}>{item.content}</p>
              <span className={styles.itemDate}>{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

