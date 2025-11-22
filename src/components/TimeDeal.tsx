import Link from 'next/link';
import styles from './TimeDeal.module.css';

const timeDealData = [
  {
    id: 1,
    title: '제주 동부 투어',
    subtitle: '성산일출봉+섭지코지+월정리 해변',
    originalPrice: 150000,
    discountPrice: 89000,
    discountRate: 41,
    image: '/travel1.jpg',
    dDay: '오늘만!',
  },
  {
    id: 2,
    title: '제주 서부 투어',
    subtitle: '한라산+협재해수욕장+비양도',
    originalPrice: 180000,
    discountPrice: 129000,
    discountRate: 28,
    image: '/travel2.jpg',
    dDay: 'D-2',
  },
  {
    id: 3,
    title: '제주 올레길 패키지',
    subtitle: '올레 7코스+제주 전통 맛집 투어',
    originalPrice: 120000,
    discountPrice: 79000,
    discountRate: 34,
    image: '/travel3.jpg',
    dDay: 'D-5',
  },
];

export default function TimeDeal() {
  return (
    <section className={styles.timeDealSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>⏰ 오늘의 특가</h2>
          <p className={styles.sectionSubtitle}>놓치면 후회할 제주 여행 타임딜</p>
        </div>

        <div className={styles.dealGrid}>
          {timeDealData.map((deal) => (
            <div key={deal.id} className={styles.dealCard}>
              <div className={styles.dealBadge}>
                <span className={styles.discountRate}>{deal.discountRate}%</span>
              </div>
              <div className={styles.dealImage}>
                <img src={deal.image} alt={deal.title} />
                <div className={styles.dDayBadge}>{deal.dDay}</div>
              </div>
              <div className={styles.dealContent}>
                <h3 className={styles.dealTitle}>{deal.title}</h3>
                <p className={styles.dealSubtitle}>{deal.subtitle}</p>
                <div className={styles.priceSection}>
                  <span className={styles.originalPrice}>
                    {deal.originalPrice.toLocaleString()}원
                  </span>
                  <span className={styles.discountPrice}>
                    {deal.discountPrice.toLocaleString()}원
                  </span>
                </div>
                <Link href="/detail" className={styles.bookButton}>
                  예약하기
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

