import styles from './TravelCards.module.css';

const travelData = [
  {
    id: 1,
    image: '/travel1.jpg',
    title: '추천 여행지',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
  {
    id: 2,
    image: '/travel2.jpg',
    title: '추천 여행지',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
  {
    id: 3,
    image: '/travel3.jpg',
    title: '추천 여행지',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
];

export default function TravelCards() {
  return (
    <section className={styles.travelSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>추천 여행지</h2>
        <div className={styles.cardGrid}>
          {travelData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

