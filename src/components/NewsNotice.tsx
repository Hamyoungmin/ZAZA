'use client';

import { useState } from 'react';
import styles from './NewsNotice.module.css';

const newsData = [
  {
    id: 1,
    content: '이상은 인생을 보고, 불타일을 무엇을 인생의 희망이며, 끝는 불타일이다.',
    date: '[00-00-00]',
  },
  {
    id: 2,
    content: '미묘한 구할 간지러 가는 인생을 행복스럽고 공이에서 같지 아니올 있다.',
    date: '[00-00-00]',
  },
  {
    id: 3,
    content: '무엇이 수 인류의 열등이 관현아이며, 능히 원다고, 뜸한 하는 대고, 이것이다.',
    date: '[00-00-00]',
  },
  {
    id: 4,
    content: '청춘이 그들은 모래를에 위하여서 뿐이다. 수 노래하며 귀는 피는 있으며, 속에서 가슴에 끊이 이것이다.',
    date: '[00-00-00]',
  },
  {
    id: 5,
    content: '용기가 그것을 가는 끝에 실로 새가 날카로우나 한다. 뜻밭에 더운지라 그들은 능히 우리는 보는 것다.',
    date: '[00-00-00]',
  },
];

const noticeData = [
  {
    id: 1,
    content: '공지사항 내용 1',
    date: '[00-00-00]',
  },
  {
    id: 2,
    content: '공지사항 내용 2',
    date: '[00-00-00]',
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

