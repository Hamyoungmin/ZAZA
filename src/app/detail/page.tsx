'use client';

import { useState } from 'react';
import styles from './detail.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DetailPage() {
  const [selectedTab, setSelectedTab] = useState<'info' | 'schedule' | 'review'>('info');

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <Header />

      {/* 상세 히어로 섹션 */}
      <section className={styles.detailHero}>
        <div className={styles.heroImageContainer}>
          <img src="/Main(Right).png" alt="제주 여행" className={styles.heroImage} />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>베스트셀러</span>
              <h1 className={styles.heroTitle}>제주도 완전정복 3박 4일</h1>
              <p className={styles.heroSubtitle}>동부+서부 핵심 명소 + 숨은 맛집 투어</p>
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
              <span className={styles.originalPrice}>350,000원</span>
              <span className={styles.discountBadge}>30% 할인</span>
            </div>
            <div className={styles.finalPrice}>245,000원</div>
          </div>
          <button className={styles.reserveButton}>지금 예약하기</button>
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
              <h2 className={styles.contentTitle}>🌴 상품 정보</h2>
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>✈️ 포함사항</h3>
                  <ul>
                    <li>왕복 항공권 (김포-제주)</li>
                    <li>3박 숙박 (4성급 호텔)</li>
                    <li>전 일정 조식</li>
                    <li>전용 차량 및 가이드</li>
                    <li>입장료 및 체험비</li>
                  </ul>
                </div>
                <div className={styles.infoCard}>
                  <h3>❌ 불포함사항</h3>
                  <ul>
                    <li>개인 경비</li>
                    <li>여행자 보험</li>
                    <li>선택관광 비용</li>
                    <li>중식/석식</li>
                  </ul>
                </div>
                <div className={styles.infoCard}>
                  <h3>📌 유의사항</h3>
                  <ul>
                    <li>최소 출발 인원: 4명</li>
                    <li>날씨에 따라 일정 변경 가능</li>
                    <li>예약 후 3일 이내 입금</li>
                    <li>출발 7일 전 취소 시 100% 환불</li>
                  </ul>
                </div>
              </div>

              <div className={styles.highlightSection}>
                <h3>🎯 이 상품의 특별함</h3>
                <div className={styles.highlights}>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}>🏖️</span>
                    <h4>핵심 명소</h4>
                    <p>성산일출봉, 한라산, 협재해변 등 제주 필수 코스</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}>🍽️</span>
                    <h4>맛집 투어</h4>
                    <p>현지인만 아는 숨은 맛집 3곳 포함</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}>📸</span>
                    <h4>포토 스팟</h4>
                    <p>인스타그램 감성 사진 명소 투어</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}>🚗</span>
                    <h4>편안한 이동</h4>
                    <p>전용 차량으로 편안한 여행</p>
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
                    <span className={styles.dayTitle}>제주 도착 & 동부 투어</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>09:00 - 김포공항 출발</li>
                    <li>10:00 - 제주공항 도착 및 호텔 체크인</li>
                    <li>12:00 - 점심식사 (흑돼지 맛집)</li>
                    <li>14:00 - 성산일출봉 관광</li>
                    <li>16:00 - 섭지코지 산책</li>
                    <li>18:00 - 호텔 복귀 및 자유시간</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 2</span>
                    <span className={styles.dayTitle}>한라산 & 중부 관광</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>09:00 - 한라산 등반 (성판악 코스)</li>
                    <li>14:00 - 점심식사</li>
                    <li>15:30 - 천지연 폭포</li>
                    <li>17:00 - 제주 전통시장 탐방</li>
                    <li>19:00 - 저녁 자유시간</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 3</span>
                    <span className={styles.dayTitle}>서부 해안 투어</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:30 - 호텔 조식 및 체크아웃</li>
                    <li>10:00 - 협재해수욕장</li>
                    <li>12:00 - 애월 카페거리</li>
                    <li>15:00 - 용두암 & 이호테우 해변</li>
                    <li>17:00 - 제주공항 이동</li>
                    <li>19:00 - 서울 도착</li>
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
                  <div className={styles.scoreNumber}>4.8</div>
                  <div className={styles.scoreStars}>⭐⭐⭐⭐⭐</div>
                  <div className={styles.reviewCount}>총 156개 후기</div>
                </div>
              </div>
              <div className={styles.reviews}>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>김**</span>
                    <span className={styles.reviewDate}>2024.11.15</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    가족여행으로 너무 좋았어요! 가이드분이 친절하시고 숨은 맛집들이 정말 맛있었습니다. 특히 성산일출봉 일출이 정말 감동적이었어요!
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>이**</span>
                    <span className={styles.reviewDate}>2024.11.10</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    알찬 일정이었습니다. 제주도 핵심 명소를 다 돌 수 있어서 좋았고, 호텔도 깨끗했어요. 다음에 또 이용하고 싶습니다!
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>박**</span>
                    <span className={styles.reviewDate}>2024.11.05</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    전반적으로 만족스러웠어요. 날씨가 좀 안 좋아서 아쉬웠지만, 그래도 충분히 즐거운 여행이었습니다. 추천합니다!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}

