'use client';

import { useState } from 'react';
import styles from '../detail/detail.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function USAPage() {
  const [selectedTab, setSelectedTab] = useState<'info' | 'schedule' | 'review'>('info');

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <Header />

      {/* 상세 히어로 섹션 */}
      <section className={styles.detailHero}>
        <div className={styles.heroImageContainer}>
          <img src="/manhattan-skyline_649448-1559.avif" alt="미국 여행" className={styles.heroImage} />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>베스트셀러</span>
              <h1 className={styles.heroTitle}>뉴욕 완전정복 6박 7일</h1>
              <p className={styles.heroSubtitle}>맨해튼 + 브루클린 + 자유의 여신상</p>
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
              <span className={styles.originalPrice}>3,500,000원</span>
              <span className={styles.discountBadge}>20% 할인</span>
            </div>
            <div className={styles.finalPrice}>2,800,000원</div>
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
              <h2 className={styles.contentTitle}>상품 정보</h2>
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>포함사항</h3>
                  <ul>
                    <li>왕복 항공권 (인천-JFK)</li>
                    <li>6박 숙박 (맨해튼 4성급 호텔)</li>
                    <li>전 일정 조식</li>
                    <li>공항 픽업 & 주요 관광 차량</li>
                    <li>자유의 여신상 페리 탑승권</li>
                  </ul>
                </div>
                <div className={styles.infoCard}>
                  <h3>불포함사항</h3>
                  <ul>
                    <li>개인 경비</li>
                    <li>여행자 보험</li>
                    <li>선택관광 비용 (브로드웨이 등)</li>
                    <li>중식/석식</li>
                  </ul>
                </div>
                <div className={styles.infoCard}>
                  <h3>유의사항</h3>
                  <ul>
                    <li>ESTA 비자면제 신청 필수</li>
                    <li>최소 출발 인원: 10명</li>
                    <li>예약 후 7일 이내 입금</li>
                    <li>출발 30일 전 취소 시 100% 환불</li>
                  </ul>
                </div>
              </div>

              <div className={styles.highlightSection}>
                <h3>이 상품의 특별함</h3>
                <div className={styles.highlights}>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>맨해튼 야경</h4>
                    <p>엠파이어 스테이트 빌딩 전망대</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>자유의 여신상</h4>
                    <p>페리 탑승 & 리버티 아일랜드 관광</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>브로드웨이</h4>
                    <p>타임스퀘어 & 뮤지컬 관람 (선택)</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>브루클린 다리</h4>
                    <p>브루클린 브리지 산책 & 덤보 지구</p>
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
                    <span className={styles.dayTitle}>뉴욕 도착</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>14:00 - 인천공항 출발</li>
                    <li>14:30 - JFK 공항 도착 (현지시각)</li>
                    <li>16:00 - 호텔 체크인</li>
                    <li>18:00 - 자유시간 (시차 적응)</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 2</span>
                    <span className={styles.dayTitle}>맨해튼 다운타운 투어</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>09:00 - 월스트리트 & 차지 불</li>
                    <li>11:00 - 9/11 메모리얼</li>
                    <li>13:00 - 점심식사 (자유)</li>
                    <li>15:00 - 자유의 여신상 페리</li>
                    <li>18:00 - 브루클린 브리지 산책</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 3</span>
                    <span className={styles.dayTitle}>미드타운 & 센트럴파크</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>09:00 - 록펠러 센터</li>
                    <li>11:00 - 센트럴파크 산책</li>
                    <li>13:00 - 점심식사</li>
                    <li>15:00 - 메트로폴리탄 미술관</li>
                    <li>18:00 - 타임스퀘어</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 4</span>
                    <span className={styles.dayTitle}>자유여행 (쇼핑)</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>10:00 - 5번가 쇼핑</li>
                    <li>13:00 - 점심식사 (자유)</li>
                    <li>15:00 - 첼시 마켓</li>
                    <li>17:00 - 하이라인 파크</li>
                    <li>19:00 - 자유시간</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 5</span>
                    <span className={styles.dayTitle}>브루클린 & 소호 투어</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>10:00 - 윌리엄스버그</li>
                    <li>12:00 - 브루클린 맛집 투어</li>
                    <li>15:00 - 소호 & 트라이베카</li>
                    <li>18:00 - 엠파이어 스테이트 야경</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 6</span>
                    <span className={styles.dayTitle}>자유여행 & 마지막 쇼핑</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>10:00 - 자유시간 (브로드웨이 등)</li>
                    <li>15:00 - 마지막 쇼핑</li>
                    <li>18:00 - 저녁식사</li>
                    <li>20:00 - 호텔 복귀</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 7</span>
                    <span className={styles.dayTitle}>귀국</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식 및 체크아웃</li>
                    <li>10:00 - JFK 공항 이동</li>
                    <li>13:00 - JFK 공항 출발</li>
                    <li>17:00 (익일) - 인천공항 도착</li>
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
                  <div className={styles.reviewCount}>총 312개 후기</div>
                </div>
              </div>
              <div className={styles.reviews}>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>조**</span>
                    <span className={styles.reviewDate}>2024.11.20</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    뉴욕이라는 도시를 제대로 경험할 수 있었습니다! 자유시간도 충분해서 좋았고, 추천 맛집들도 다 맛있었어요. 특히 자유의 여신상이 감동적이었습니다.
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>신**</span>
                    <span className={styles.reviewDate}>2024.11.14</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    신혼여행으로 다녀왔는데 완벽했습니다. 브루클린 브리지에서의 일몰, 센트럴파크 산책, 브로드웨이 뮤지컬까지 모든 게 좋았어요!
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>배**</span>
                    <span className={styles.reviewDate}>2024.11.09</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    처음 가는 뉴욕이었는데 일정이 알차게 구성되어 있어서 편하게 여행했습니다. 호텔 위치도 좋고, 가이드님도 친절하셨어요. 강추!
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

