'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import TimeDeal from '@/components/TimeDeal';
import PopularDestinations from '@/components/PopularDestinations';
import NewsNotice from '@/components/NewsNotice';
import TravelCards from '@/components/TravelCards';
import CircleSection from '@/components/CircleSection';
import Footer from '@/components/Footer';

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <Header />

      {/* 메인 히어로 캐러셀 */}
      <HeroCarousel onNavigate={() => router.push('/detail')} />

      {/* 타임딜 섹션 */}
      <TimeDeal />

      {/* 인기 여행지 섹션 */}
      <PopularDestinations />

      {/* 뉴스/공지 섹션 */}
      <NewsNotice />

      {/* 추천 여행지 섹션 */}
      <TravelCards />

      {/* 여러 가지 제안 섹션 */}
      <CircleSection />

      {/* 푸터 */}
      <Footer />
    </div>
  );
}

