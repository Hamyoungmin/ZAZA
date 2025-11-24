'use client';

import { useRouter } from 'next/navigation';
import styles from './news-list.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const newsData = [
  {
    id: 1,
    title: '이상은 인생을 보고, 불타일을 무엇을 인생의 희망이며',
    content: '이상은 인생을 보고, 불타일을 무엇을 인생의 희망이며, 끝는 불타일이다.',
    date: '2024-11-23',
    category: '여행 소식',
  },
  {
    id: 2,
    title: '미묘한 구할 간지러 가는 인생을 행복스럽고',
    content: '미묘한 구할 간지러 가는 인생을 행복스럽고 공이에서 같지 아니올 있다.',
    date: '2024-11-20',
    category: '여행 팁',
  },
  {
    id: 3,
    title: '무엇이 수 인류의 열등이 관현아이며',
    content: '무엇이 수 인류의 열등이 관현아이며, 능히 원다고, 뜸한 하는 대고, 이것이다.',
    date: '2024-11-18',
    category: '문화 체험',
  },
  {
    id: 4,
    title: '청춘이 그들은 모래를에 위하여서 뿐이다',
    content: '청춘이 그들은 모래를에 위하여서 뿐이다. 수 노래하며 귀는 피는 있으며, 속에서 가슴에 끊이 이것이다.',
    date: '2024-11-15',
    category: '액티비티',
  },
  {
    id: 5,
    title: '용기가 그것을 가는 끝에 실로 새가',
    content: '용기가 그것을 가는 끝에 실로 새가 날카로우나 한다. 뜻밭에 더운지라 그들은 능히 우리는 보는 것다.',
    date: '2024-11-12',
    category: '여행 가이드',
  },
];

export default function NewsListPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Header />
      
      <div className={styles.contentWrapper}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>뉴스(News)</h1>
          <p className={styles.pageSubtitle}>오똘 여행사의 최신 소식을 확인하세요</p>
        </div>

        <div className={styles.newsList}>
          {newsData.map((news) => (
            <div 
              key={news.id} 
              className={styles.newsCard}
              onClick={() => router.push(`/news/${news.id}`)}
            >
              <div className={styles.cardHeader}>
                <span className={styles.category}>{news.category}</span>
                <span className={styles.date}>{news.date}</span>
              </div>
              <h2 className={styles.newsTitle}>{news.title}</h2>
              <p className={styles.newsContent}>{news.content}</p>
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

