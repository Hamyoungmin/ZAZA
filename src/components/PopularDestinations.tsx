import styles from './PopularDestinations.module.css';

const destinations = [
  {
    id: 1,
    name: '성산일출봉',
    description: '세계자연유산, 일출 명소',
    price: '무료',
    category: '자연',
    image: '/circle1.jpg',
  },
  {
    id: 2,
    name: '한라산',
    description: '대한민국 최고봉',
    price: '무료',
    category: '자연',
    image: '/circle2.jpg',
  },
  {
    id: 3,
    name: '협재해수욕장',
    description: '에메랄드빛 바다',
    price: '무료',
    category: '해변',
    image: '/circle3.jpg',
  },
  {
    id: 4,
    name: '섭지코지',
    description: '드라마 촬영지',
    price: '무료',
    category: '명소',
    image: '/travel1.jpg',
  },
];

export default function PopularDestinations() {
  return (
    <section className={styles.popularSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>🔥 이번 주 인기 여행지</h2>
          <p className={styles.sectionSubtitle}>
            제주도에서 가장 사랑받는 명소만 모았어요
          </p>
        </div>

        <div className={styles.grid}>
          {destinations.map((dest) => (
            <div key={dest.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={dest.image} alt={dest.name} />
                <div className={styles.overlay}>
                  <span className={styles.category}>{dest.category}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{dest.name}</h3>
                <p className={styles.description}>{dest.description}</p>
                <div className={styles.footer}>
                  <span className={styles.price}>{dest.price}</span>
                  <button className={styles.detailButton}>자세히 보기</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

