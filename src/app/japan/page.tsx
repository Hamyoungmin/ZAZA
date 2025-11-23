'use client';

import { useState } from 'react';
import styles from '../detail/detail.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationModal from '@/components/ReservationModal';

export default function JapanPage() {
  const [selectedTab, setSelectedTab] = useState<'info' | 'schedule' | 'review'>('info');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productName = '도쿄&후지산 완전정복 4박 5일';
  const productPrice = 1350000;

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <Header />

      {/* 상세 히어로 섹션 */}
      <section className={styles.detailHero}>
        <div className={styles.heroImageContainer}>
          <img src="/shutterstock304093253supersize-1675509746654.jpg" alt="일본 여행" className={styles.heroImage} />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>베스트셀러</span>
              <h1 className={styles.heroTitle}>{productName}</h1>
              <p className={styles.heroSubtitle}>도쿄 시내 + 후지산 + 온천 체험</p>
            </div>
          </div>
        </div>
      </section>

      {/* 가격 및 예약 섹션 */}
      <section className={styles.priceSection}>
        <div className={styles.priceBox}>
          <div className={styles.priceInfo}>
            <div className={styles.priceLabel}>1인 기준</div>
            <div className={styles.priceRow}>
              <span className={styles.originalPrice}>1,800,000원</span>
              <span className={styles.discountBadge}>25% 할인</span>
            </div>
            <div className={styles.finalPrice}>{productPrice.toLocaleString()}원</div>
          </div>
          <button 
            className={styles.reserveButton}
            onClick={() => setIsModalOpen(true)}
          >
            지금 예약하기
          </button>
        </div>
      </section>

      {/* 나머지 콘텐츠는 동일하므로 생략... */}
      <Footer />

      {/* 예약 모달 */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={productName}
        productPrice={productPrice}
      />
    </div>
  );
}
