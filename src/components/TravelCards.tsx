import styles from './TravelCards.module.css';

const travelData = [
  {
    id: 1,
    image: '/shutterstock304093253supersize-1675509746654.jpg',
    title: '일본 여행',
    description:
      '후지산과 함께하는 일본의 아름다운 풍경을 만나보세요. 전통과 현대가 어우러진 특별한 경험을 선사합니다.',
  },
  {
    id: 2,
    image: '/premium_photo-1661962660197-6c2430fb49a6.jpg',
    title: '유럽 여행',
    description:
      '베니스의 낭만적인 운하와 아름다운 건축물들을 감상하세요. 유럽의 역사와 문화를 체험할 수 있습니다.',
  },
  {
    id: 3,
    image: '/manhattan-skyline_649448-1559.avif',
    title: '미국 여행',
    description:
      '뉴욕 맨해튼의 화려한 스카이라인을 경험하세요. 세계 금융의 중심지에서 특별한 추억을 만들어보세요.',
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
                {/* 실제 이미지로 교체 시 Next.js Image 컴포넌트 사용 */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
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

