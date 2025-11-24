'use client';

import { useState } from 'react';
import styles from '../detail/detail.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationModal from '@/components/ReservationModal';

export default function ItalyPage() {
  const [selectedTab, setSelectedTab] = useState<'info' | 'schedule' | 'review'>('info');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productName = '이탈리아 3대 도시 완전정복 7박 9일';
  const productPrice = 3200000;

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <Header />

      {/* 상세 히어로 섹션 */}
      <section className={styles.detailHero}>
        <div className={styles.heroImageContainer}>
          <img src="/다운로드.jpg" alt="이탈리아 여행" className={styles.heroImage} />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>인기상품</span>
              <h1 className={styles.heroTitle}>{productName}</h1>
              <p className={styles.heroSubtitle}>로마 + 피렌체 + 베네치아 완전정복</p>
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
              <span className={styles.originalPrice}>4,200,000원</span>
              <span className={styles.discountBadge}>24% 할인</span>
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
                    <li>왕복 항공권 (인천-로마)</li>
                    <li>7박 숙박 (4성급 호텔)</li>
                    <li>전 일정 조식 및 중식</li>
                    <li>전용 차량 및 한국어 가이드</li>
                    <li>주요 관광지 입장료</li>
                    <li>바티칸 박물관 예약</li>
                  </ul>
                </div>
                <div className={styles.infoCard}>
                  <h3>불포함사항</h3>
                  <ul>
                    <li>개인 경비</li>
                    <li>여행자 보험</li>
                    <li>석식 (일부)</li>
                    <li>선택관광 비용</li>
                    <li>팁 (가이드, 기사)</li>
                  </ul>
                </div>
                <div className={styles.infoCard}>
                  <h3>유의사항</h3>
                  <ul>
                    <li>최소 출발 인원: 10명</li>
                    <li>여권 유효기간 6개월 이상</li>
                    <li>예약 후 7일 이내 입금</li>
                    <li>출발 20일 전 취소 시 100% 환불</li>
                  </ul>
                </div>
              </div>

              <div className={styles.highlightSection}>
                <h3>이 상품의 특별함</h3>
                <div className={styles.highlights}>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>로마 유적지</h4>
                    <p>콜로세움, 트레비 분수, 바티칸 투어</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>피렌체 예술</h4>
                    <p>우피치 미술관, 두오모 성당 관람</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>베네치아 곤돌라</h4>
                    <p>낭만적인 곤돌라 탑승 체험</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>이탈리아 미식</h4>
                    <p>정통 파스타, 피자, 젤라또 맛집 투어</p>
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
                    <span className={styles.dayTitle}>인천 출발</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>11:00 - 인천공항 출발</li>
                    <li>16:00 - 로마 피우미치노 공항 도착</li>
                    <li>18:00 - 호텔 체크인</li>
                    <li>19:00 - 환영 만찬</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 2</span>
                    <span className={styles.dayTitle}>로마 시내 관광</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>09:00 - 콜로세움 & 포로 로마노</li>
                    <li>12:00 - 점심식사 (로마 전통 요리)</li>
                    <li>14:00 - 트레비 분수 & 스페인 계단</li>
                    <li>16:00 - 판테온 & 나보나 광장</li>
                    <li>19:00 - 자유시간</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 3</span>
                    <span className={styles.dayTitle}>바티칸 & 로마</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>09:00 - 바티칸 박물관 & 시스티나 성당</li>
                    <li>12:00 - 성 베드로 대성당</li>
                    <li>14:00 - 점심식사</li>
                    <li>16:00 - 산탄젤로 성</li>
                    <li>18:00 - 자유시간 (쇼핑)</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 4</span>
                    <span className={styles.dayTitle}>피렌체 이동 & 관광</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식 및 체크아웃</li>
                    <li>09:00 - 피렌체로 이동 (버스)</li>
                    <li>12:00 - 피렌체 도착 및 점심</li>
                    <li>14:00 - 두오모 성당 & 종탑</li>
                    <li>16:00 - 우피치 미술관</li>
                    <li>18:00 - 호텔 체크인</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 5</span>
                    <span className={styles.dayTitle}>피렌체 & 피사</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>09:00 - 베키오 다리 & 시뇨리아 광장</li>
                    <li>11:00 - 피사 사탑 투어</li>
                    <li>13:00 - 점심식사</li>
                    <li>15:00 - 피렌체 복귀</li>
                    <li>17:00 - 자유시간 (쇼핑)</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 6</span>
                    <span className={styles.dayTitle}>베네치아 이동 & 관광</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식 및 체크아웃</li>
                    <li>09:00 - 베네치아로 이동</li>
                    <li>12:00 - 베네치아 도착 및 점심</li>
                    <li>14:00 - 산마르코 광장 & 대성당</li>
                    <li>16:00 - 곤돌라 탑승 체험</li>
                    <li>18:00 - 호텔 체크인</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 7</span>
                    <span className={styles.dayTitle}>베네치아 & 무라노 섬</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>09:00 - 무라노 섬 (유리공예)</li>
                    <li>11:00 - 부라노 섬 (레이스 공예)</li>
                    <li>13:00 - 점심식사</li>
                    <li>15:00 - 베네치아 자유시간</li>
                    <li>19:00 - 페어웰 디너</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 8-9</span>
                    <span className={styles.dayTitle}>귀국</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식 및 체크아웃</li>
                    <li>10:00 - 베네치아 공항 이동</li>
                    <li>13:00 - 베네치아 출발</li>
                    <li>08:00+1 - 인천공항 도착</li>
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
                  <div className={styles.reviewCount}>총 342개 후기</div>
                </div>
              </div>
              <div className={styles.reviews}>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>최**</span>
                    <span className={styles.reviewDate}>2024.11.18</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    이탈리아 3대 도시를 한 번에 볼 수 있어서 너무 좋았어요! 특히 바티칸 박물관과 베네치아 곤돌라가 인상 깊었습니다. 가이드님도 친절하셨어요.
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>정**</span>
                    <span className={styles.reviewDate}>2024.11.12</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    역사와 예술을 좋아하는 사람이라면 꼭 가야 할 여행지예요. 콜로세움에서 로마의 역사를 느끼고, 우피치에서 르네상스 예술을 감상했습니다.
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>강**</span>
                    <span className={styles.reviewDate}>2024.11.05</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    일정이 알차게 짜여있어서 좋았어요. 음식도 맛있고 숙소도 깨끗했습니다. 다만 이동 시간이 좀 길어서 피곤했지만, 전반적으로 만족스러웠어요!
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

