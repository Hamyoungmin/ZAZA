'use client';

import { useState } from 'react';
import styles from '../detail/detail.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationModal from '@/components/ReservationModal';

export default function MaldivesPage() {
  const [selectedTab, setSelectedTab] = useState<'info' | 'schedule' | 'review'>('info');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productName = '몰디브 럭셔리 리조트 5박 7일';
  const productPrice = 4500000;

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <Header />

      {/* 상세 히어로 섹션 */}
      <section className={styles.detailHero}>
        <div className={styles.heroImageContainer}>
          <img src="/pngtree-beautiful-maldives-travel-destination-generative-ai-image_15639253.jpg" alt="몰디브 여행" className={styles.heroImage} />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>럭셔리</span>
              <h1 className={styles.heroTitle}>{productName}</h1>
              <p className={styles.heroSubtitle}>수상 빌라 + 스노클링 + 스파 체험</p>
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
              <span className={styles.originalPrice}>6,000,000원</span>
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

      {/* 탭 네비게이션 */}
      <section className={styles.tabSection}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${selectedTab === 'info' ? styles.activeTab : ''}`}
            onClick={() => setSelectedTab('info')}
          >
            상품정보
          </button>
          <button
            className={`${styles.tab} ${selectedTab === 'schedule' ? styles.activeTab : ''}`}
            onClick={() => setSelectedTab('schedule')}
          >
            일정안내
          </button>
          <button
            className={`${styles.tab} ${selectedTab === 'review' ? styles.activeTab : ''}`}
            onClick={() => setSelectedTab('review')}
          >
            이용후기
          </button>
        </div>
      </section>

      {/* 탭 콘텐츠 */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          {selectedTab === 'info' && (
            <div className={styles.infoContent}>
              <h2 className={styles.contentTitle}>상품 정보</h2>
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>포함사항</h3>
                  <ul>
                    <li>왕복 항공권 (인천-말레)</li>
                    <li>5박 숙박 (5성급 수상빌라)</li>
                    <li>전 일정 조식 및 석식</li>
                    <li>공항-리조트 스피드보트</li>
                    <li>스노클링 장비 대여</li>
                    <li>스파 1회 이용권</li>
                  </ul>
                </div>
                <div className={styles.infoCard}>
                  <h3>불포함사항</h3>
                  <ul>
                    <li>개인 경비</li>
                    <li>여행자 보험</li>
                    <li>중식 (일부)</li>
                    <li>선택 액티비티 비용</li>
                    <li>리조트 내 유료 서비스</li>
                  </ul>
                </div>
                <div className={styles.infoCard}>
                  <h3>유의사항</h3>
                  <ul>
                    <li>최소 출발 인원: 2명</li>
                    <li>여권 유효기간 6개월 이상</li>
                    <li>예약 후 3일 이내 입금</li>
                    <li>출발 30일 전 취소 시 100% 환불</li>
                  </ul>
                </div>
              </div>

              <div className={styles.highlightSection}>
                <h3>이 상품의 특별함</h3>
                <div className={styles.highlights}>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>수상 빌라</h4>
                    <p>프라이빗 풀장이 있는 럭셔리 수상 빌라</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>스노클링</h4>
                    <p>산호초와 열대어가 가득한 바다 체험</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>스파 & 마사지</h4>
                    <p>전통 몰디브 스파 1회 무료 제공</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>선셋 크루즈</h4>
                    <p>낭만적인 인도양 선셋 크루즈</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'schedule' && (
            <div className={styles.scheduleContent}>
              <h2 className={styles.contentTitle}>📅 일정 안내</h2>
              <div className={styles.schedule}>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 1</span>
                    <span className={styles.dayTitle}>인천 출발 & 몰디브 도착</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>23:00 - 인천공항 출발</li>
                    <li>05:00+1 - 말레 국제공항 도착</li>
                    <li>06:30 - 스피드보트로 리조트 이동</li>
                    <li>08:00 - 리조트 체크인 및 조식</li>
                    <li>10:00 - 수상빌라 입실</li>
                    <li>자유시간 (휴식 및 리조트 탐방)</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 2</span>
                    <span className={styles.dayTitle}>스노클링 & 해양 액티비티</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 조식 뷔페</li>
                    <li>10:00 - 하우스 리프 스노클링</li>
                    <li>12:00 - 자유시간</li>
                    <li>15:00 - 카약 & 패들보드 체험</li>
                    <li>18:00 - 선셋 크루즈</li>
                    <li>19:30 - 석식 (리조트 레스토랑)</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 3</span>
                    <span className={styles.dayTitle}>무인도 투어 & 돌핀 워칭</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 조식</li>
                    <li>09:00 - 무인도 투어 출발</li>
                    <li>10:30 - 돌핀 워칭</li>
                    <li>12:00 - 무인도 BBQ 점심</li>
                    <li>14:00 - 무인도 자유시간</li>
                    <li>16:00 - 리조트 복귀</li>
                    <li>19:00 - 석식</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 4</span>
                    <span className={styles.dayTitle}>스파 & 자유시간</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 조식</li>
                    <li>10:00 - 몰디브 전통 스파 체험</li>
                    <li>12:00 - 중식 (자유)</li>
                    <li>14:00 - 자유시간 (수영, 독서 등)</li>
                    <li>17:00 - 비치 요가 (선택)</li>
                    <li>19:00 - 석식</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 5</span>
                    <span className={styles.dayTitle}>자유시간 & 쇼핑</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 조식</li>
                    <li>10:00 - 말레 시티 투어 (선택)</li>
                    <li>12:00 - 현지 레스토랑 점심</li>
                    <li>14:00 - 기념품 쇼핑</li>
                    <li>16:00 - 리조트 복귀</li>
                    <li>19:00 - 페어웰 디너</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 6-7</span>
                    <span className={styles.dayTitle}>체크아웃 & 귀국</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 조식 및 체크아웃</li>
                    <li>09:00 - 스피드보트로 공항 이동</li>
                    <li>11:00 - 말레 국제공항 출발</li>
                    <li>20:00 - 인천공항 도착</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'review' && (
            <div className={styles.reviewContent}>
              <h2 className={styles.contentTitle}>⭐ 이용 후기</h2>
              <div className={styles.reviewStats}>
                <div className={styles.reviewScore}>
                  <div className={styles.scoreNumber}>4.9</div>
                  <div className={styles.scoreStars}>⭐⭐⭐⭐⭐</div>
                  <div className={styles.reviewCount}>총 267개 후기</div>
                </div>
              </div>
              <div className={styles.reviews}>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>김**</span>
                    <span className={styles.reviewDate}>2024.11.20</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    신혼여행으로 다녀왔는데 정말 천국이었어요! 수상빌라에서 바로 바다로 들어가서 스노클링할 수 있고, 물고기들이 정말 많았어요. 평생 잊지 못할 추억입니다.
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>박**</span>
                    <span className={styles.reviewDate}>2024.11.15</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    리조트 시설이 정말 좋았고, 직원들도 친절했어요. 스파도 최고였고 음식도 맛있었습니다. 가격은 비싸지만 그만한 가치가 있어요!
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>이**</span>
                    <span className={styles.reviewDate}>2024.11.10</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    돌핀 워칭에서 야생 돌고래를 실제로 봤어요! 너무 감동적이었습니다. 선셋 크루즈도 정말 낭만적이었고, 다시 가고 싶어요.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 푸터 */}
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

