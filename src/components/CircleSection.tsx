import Link from 'next/link';
import styles from './CircleSection.module.css';

const circleData = [
  {
    id: 1,
    image: '/37d526500878dd0d960969bcfe21a83c.jpg',
    text: '제주도\n국내 최고의 휴양지',
    link: '/detail',
  },
  {
    id: 2,
    image: '/shutterstock304093253supersize-1675509746654.jpg',
    text: '일본\n가까운 이웃나라 여행',
    link: '/japan',
  },
  {
    id: 3,
    image: '/manhattan-skyline_649448-1559.avif',
    text: '미국\n꿈의 도시 뉴욕',
    link: '/usa',
  },
];

export default function CircleSection() {
  return (
    <section className={styles.circleSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>인기 여행지</h2>
        <div className={styles.circleGrid}>
          {circleData.map((item) => (
            <Link key={item.id} href={item.link} className={styles.circleItem}>
              <div className={styles.circleImageWrapper}>
                {/* 실제 이미지로 교체 시 Next.js Image 컴포넌트 사용 */}
                <img
                  src={item.image}
                  alt={item.text}
                  className={styles.circleImage}
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div className={styles.circleOverlay}>
                  <p className={styles.circleText}>{item.text}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

