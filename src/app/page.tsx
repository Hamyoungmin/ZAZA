'use client';

import { useState } from 'react';
import styles from './page.module.css';
import HeroCarousel from '@/components/HeroCarousel';
import NewsNotice from '@/components/NewsNotice';
import TravelCards from '@/components/TravelCards';
import CircleSection from '@/components/CircleSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <span className={styles.infoIcon}>ⓘ</span>
          <h1 className={styles.headerTitle}>Welcome to JEJU Island</h1>
        </div>
        <div className={styles.headerLine}></div>
      </header>

      {/* 메인 히어로 캐러셀 */}
      <HeroCarousel />

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

