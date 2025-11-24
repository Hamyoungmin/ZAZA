'use client';

import { useRouter } from 'next/navigation';
import styles from './PopularDestinations.module.css';

const destinations = [
  {
    id: 1,
    name: '몰디브',
    description: '천국 같은 수상 빌라 리조트',
    price: '₩2,500,000~',
    category: '휴양',
    image: '/pngtree-beautiful-maldives-travel-destination-generative-ai-image_15639253.jpg',
    link: '/maldives',
  },
  {
    id: 2,
    name: '태국 치앙마이',
    description: '황금빛 사원과 전통 문화',
    price: '₩890,000~',
    category: '문화',
    image: '/landmark-pagoda-doi-inthanon-national-park-chiang-mai-thailand_335224-779.avif',
    link: '/thailand',
  },
  {
    id: 3,
    name: '이탈리아 친퀘테레',
    description: '다채로운 해안 마을',
    price: '₩1,800,000~',
    category: '명소',
    image: '/tourism-sea-sky-vacation-wallpaper-preview.jpg',
    link: '/italy',
  },
  {
    id: 4,
    name: '중국 상하이',
    description: '동양의 파리, 현대와 전통',
    price: '₩650,000~',
    category: '도시',
    image: '/1mj1412000b4dnyspA620_Z_640_10000_R5.jpg_.webp',
    link: '/china',
  },
];

export default function PopularDestinations() {
  const router = useRouter();
  return (
    <section className={styles.popularSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>이번 주 인기 여행지</h2>
          <p className={styles.sectionSubtitle}>
            제주도에서 가장 사랑받는 명소만 모았어요
          </p>
        </div>

        <div className={styles.grid}>
          {destinations.map((dest) => (
            <div 
              key={dest.id} 
              className={styles.card}
              onClick={() => router.push(dest.link)}
              style={{ cursor: 'pointer' }}
            >
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

