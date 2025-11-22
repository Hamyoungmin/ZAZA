import styles from './CircleSection.module.css';

const circleData = [
  {
    id: 1,
    image: '/circle1.jpg',
    text: 'List Item 01',
  },
  {
    id: 2,
    image: '/circle2.jpg',
    text: 'Dorem ipsum',
  },
  {
    id: 3,
    image: '/circle3.jpg',
    text: 'Dorem ipsum\nDorem ipsum\nDorem ipsum',
  },
];

export default function CircleSection() {
  return (
    <section className={styles.circleSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>여러가지 제안</h2>
        <div className={styles.circleGrid}>
          {circleData.map((item) => (
            <div key={item.id} className={styles.circleItem}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

