'use client';

import { useParams, useRouter } from 'next/navigation';
import styles from './news.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const newsData = [
  {
    id: 1,
    title: '이상은 인생을 보고, 불타일을 무엇을 인생의 희망이며',
    content: '이상은 인생을 보고, 불타일을 무엇을 인생의 희망이며, 끝는 불타일이다.',
    date: '2024-11-23',
    fullContent: `
      청춘은 인생의 황금기입니다. 이 시기에 우리는 무한한 가능성과 희망을 품고 있으며, 
      미래를 향한 열정으로 가득 차 있습니다. 
      
      우리의 여행 서비스는 이러한 청춘의 열정을 응원하며, 더 넓은 세상을 경험할 수 있는 
      기회를 제공합니다. 새로운 문화를 접하고, 다양한 사람들을 만나며, 
      잊지 못할 추억을 만들어가세요.
      
      여행은 단순한 이동이 아닌, 인생의 소중한 경험이자 성장의 기회입니다. 
      우리와 함께 특별한 여행을 떠나보세요.
    `,
    author: '오똘 여행사',
    category: '여행 소식',
  },
  {
    id: 2,
    title: '미묘한 구할 간지러 가는 인생을 행복스럽고',
    content: '미묘한 구할 간지러 가는 인생을 행복스럽고 공이에서 같지 아니올 있다.',
    date: '2024-11-20',
    fullContent: `
      행복한 여행의 시작은 완벽한 계획에서 비롯됩니다. 
      우리는 고객님의 소중한 시간과 예산을 고려하여 최적의 여행 코스를 제안합니다.
      
      각 여행지의 숨은 명소와 현지인만 아는 맛집까지, 
      세심하게 준비된 일정으로 특별한 경험을 선사합니다.
      
      가족 여행, 신혼여행, 친구들과의 여행 등 
      모든 형태의 여행에 맞춤형 서비스를 제공합니다.
    `,
    author: '오똘 여행사',
    category: '여행 팁',
  },
  {
    id: 3,
    title: '무엇이 수 인류의 열등이 관현아이며',
    content: '무엇이 수 인류의 열등이 관현아이며, 능히 원다고, 뜸한 하는 대고, 이것이다.',
    date: '2024-11-18',
    fullContent: `
      세계 각국의 문화와 역사를 체험하는 것은 인생의 큰 자산이 됩니다.
      우리의 문화 탐방 프로그램은 단순한 관광을 넘어 
      깊이 있는 문화 체험을 제공합니다.
      
      현지 전문 가이드와 함께하는 역사 탐방, 
      전통 공예 체험, 현지 음식 문화 체험 등 
      다양한 프로그램이 준비되어 있습니다.
      
      여행을 통해 세상을 보는 시야를 넓히고, 
      새로운 가치관을 발견해보세요.
    `,
    author: '오똘 여행사',
    category: '문화 체험',
  },
  {
    id: 4,
    title: '청춘이 그들은 모래를에 위하여서 뿐이다',
    content: '청춘이 그들은 모래를에 위하여서 뿐이다. 수 노래하며 귀는 피는 있으며, 속에서 가슴에 끊이 이것이다.',
    date: '2024-11-15',
    fullContent: `
      젊음의 특권은 도전과 모험입니다. 
      우리의 액티비티 여행 프로그램은 
      스릴 넘치는 경험을 원하는 분들을 위해 준비되었습니다.
      
      스노클링, 패러글라이딩, 트레킹, 래프팅 등 
      다양한 액티비티를 안전하게 즐길 수 있도록 
      전문 강사와 최신 장비를 제공합니다.
      
      평생 잊지 못할 짜릿한 경험을 
      우리와 함께 만들어가세요.
    `,
    author: '오똘 여행사',
    category: '액티비티',
  },
  {
    id: 5,
    title: '용기가 그것을 가는 끝에 실로 새가',
    content: '용기가 그것을 가는 끝에 실로 새가 날카로우나 한다. 뜻밭에 더운지라 그들은 능히 우리는 보는 것다.',
    date: '2024-11-12',
    fullContent: `
      새로운 도전은 언제나 용기를 필요로 합니다. 
      처음 해외여행을 계획하시는 분들을 위해 
      우리는 완벽한 가이드를 제공합니다.
      
      여권 발급부터 항공권 예약, 숙소 선택, 
      현지 교통 이용법까지 모든 것을 도와드립니다.
      
      24시간 고객 지원 서비스로 
      여행 중 발생할 수 있는 모든 문제에 
      신속하게 대응합니다.
    `,
    author: '오똘 여행사',
    category: '여행 가이드',
  },
];

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const newsId = Number(params.id);
  
  const news = newsData.find(item => item.id === newsId);

  if (!news) {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.errorContainer}>
          <h1>뉴스를 찾을 수 없습니다</h1>
          <button onClick={() => router.push('/')} className={styles.backButton}>
            메인으로 돌아가기
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Header />
      
      <div className={styles.contentWrapper}>
        <div className={styles.breadcrumb}>
          <span onClick={() => router.push('/')} className={styles.breadcrumbLink}>홈</span>
          <span className={styles.breadcrumbSeparator}>&gt;</span>
          <span onClick={() => router.push('/')} className={styles.breadcrumbLink}>뉴스</span>
          <span className={styles.breadcrumbSeparator}>&gt;</span>
          <span className={styles.breadcrumbCurrent}>{news.title}</span>
        </div>

        <article className={styles.article}>
          <div className={styles.articleHeader}>
            <span className={styles.category}>{news.category}</span>
            <h1 className={styles.title}>{news.title}</h1>
            <div className={styles.meta}>
              <span className={styles.author}>{news.author}</span>
              <span className={styles.separator}>|</span>
              <span className={styles.date}>{news.date}</span>
            </div>
          </div>

          <div className={styles.articleBody}>
            {news.fullContent.split('\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index} className={styles.paragraph}>{paragraph.trim()}</p>
            ))}
          </div>

          <div className={styles.articleFooter}>
            <button onClick={() => router.push('/')} className={styles.listButton}>
              목록으로
            </button>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
}

