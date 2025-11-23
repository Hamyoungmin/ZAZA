'use client';

import { useState } from 'react';
import styles from '../detail/detail.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function JapanPage() {
  const [selectedTab, setSelectedTab] = useState<'info' | 'schedule' | 'review'>('info');

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
              <h1 className={styles.heroTitle}>도쿄&후지산 완전정복 4박 5일</h1>
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
            <div className={styles.finalPrice}>1,350,000원</div>
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
                    <li>왕복 항공권 (인천-나리타)</li>
                    <li>4박 숙박 (4성급 호텔)</li>
                    <li>전 일정 조식</li>
                    <li>전용 차량 및 가이드</li>
                    <li>입장료 및 온천 이용권</li>
                  </ul>
                </div>
                <div className={styles.infoCard}>
                  <h3>불포함사항</h3>
                  <ul>
                    <li>개인 경비</li>
                    <li>여행자 보험</li>
                    <li>선택관광 비용</li>
                    <li>중식/석식</li>
                  </ul>
                </div>
                <div className={styles.infoCard}>
                  <h3>유의사항</h3>
                  <ul>
                    <li>최소 출발 인원: 6명</li>
                    <li>날씨에 따라 후지산 등반 불가</li>
                    <li>예약 후 3일 이내 입금</li>
                    <li>출발 10일 전 취소 시 100% 환불</li>
                  </ul>
                </div>
              </div>

              <div className={styles.highlightSection}>
                <h3>이 상품의 특별함</h3>
                <div className={styles.highlights}>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>후지산 전망</h4>
                    <p>세계문화유산 후지산 5합목 관광</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>온천 체험</h4>
                    <p>전통 료칸에서의 온천 힐링</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>미식 투어</h4>
                    <p>스시, 라멘, 덴푸라 맛집 투어</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>문화 체험</h4>
                    <p>아사쿠사 사원, 시부야 거리 탐방</p>
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
                    <span className={styles.dayTitle}>도쿄 도착 & 시내 관광</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>09:00 - 인천공항 출발</li>
                    <li>11:30 - 나리타공항 도착</li>
                    <li>13:00 - 점심식사 (스시 맛집)</li>
                    <li>15:00 - 아사쿠사 센소지 사원</li>
                    <li>17:00 - 스카이트리 전망대</li>
                    <li>19:00 - 호텔 체크인 및 자유시간</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 2</span>
                    <span className={styles.dayTitle}>후지산 & 하코네 온천</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>09:00 - 후지산 5합목 출발</li>
                    <li>12:00 - 후지산 전망 레스토랑 점심</li>
                    <li>14:00 - 하코네 로프웨이</li>
                    <li>16:00 - 온천 료칸 체크인</li>
                    <li>18:00 - 전통 가이세키 요리</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 3</span>
                    <span className={styles.dayTitle}>도쿄 시내 자유여행</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>09:00 - 호텔 조식</li>
                    <li>10:00 - 시부야 & 하라주쿠</li>
                    <li>13:00 - 메이지 신궁</li>
                    <li>15:00 - 오모테산도 쇼핑</li>
                    <li>18:00 - 신주쿠 야경 투어</li>
                    <li>20:00 - 자유시간</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 4</span>
                    <span className={styles.dayTitle}>도쿄 디즈니랜드 (선택)</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>09:00 - 디즈니랜드/디즈니씨 선택</li>
                    <li>종일 - 자유 이용</li>
                    <li>20:00 - 호텔 복귀</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 5</span>
                    <span className={styles.dayTitle}>귀국</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식 및 체크아웃</li>
                    <li>10:00 - 나리타공항 이동</li>
                    <li>13:00 - 나리타공항 출발</li>
                    <li>16:00 - 인천공항 도착</li>
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
                  <div className={styles.reviewCount}>총 234개 후기</div>
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
                    후지산이 정말 장관이었습니다! 날씨도 좋아서 완벽한 전망을 볼 수 있었고, 온천도 너무 좋았어요. 가이드님도 친절하셔서 편하게 여행했습니다.
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>정**</span>
                    <span className={styles.reviewDate}>2024.11.12</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    신혼여행으로 다녀왔는데 일정이 알차고 좋았습니다. 특히 료칸에서의 온천과 가이세키 요리가 인상 깊었어요. 추천합니다!
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>강**</span>
                    <span className={styles.reviewDate}>2024.11.08</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    가족여행으로 완벽했습니다. 아이들도 디즈니랜드에서 너무 좋아했고, 어른들은 온천에서 힐링했어요. 다음에 또 가고 싶어요!
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

