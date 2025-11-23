'use client';

import { useState } from 'react';
import styles from '../detail/detail.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ChinaPage() {
  const [selectedTab, setSelectedTab] = useState<'info' | 'schedule' | 'review'>('info');

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <Header />

      {/* 상세 히어로 섹션 */}
      <section className={styles.detailHero}>
        <div className={styles.heroImageContainer}>
          <img src="/1mj1412000b4dnyspA620_Z_640_10000_R5.jpg_.webp" alt="중국 여행" className={styles.heroImage} />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>상하이&항저우 완전정복 5박 6일</h1>
              <p className={styles.heroSubtitle}>상하이 야경 + 항저우 서호 + 전통 문화 체험</p>
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
              <span className={styles.originalPrice}>1,200,000원</span>
              <span className={styles.discountBadge}>35% 할인</span>
            </div>
            <div className={styles.finalPrice}>780,000원</div>
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
                    <li>왕복 항공권 (인천-푸동)</li>
                    <li>5박 숙박 (5성급 호텔)</li>
                    <li>전 일정 조식 및 중식</li>
                    <li>전용 차량 및 한국어 가이드</li>
                    <li>입장료 및 크루즈 탑승권</li>
                  </ul>
                </div>
                <div className={styles.infoCard}>
                  <h3>불포함사항</h3>
                  <ul>
                    <li>개인 경비</li>
                    <li>여행자 보험</li>
                    <li>선택관광 비용</li>
                    <li>석식 (일부)</li>
                  </ul>
                </div>
                <div className={styles.infoCard}>
                  <h3>유의사항</h3>
                  <ul>
                    <li>최소 출발 인원: 8명</li>
                    <li>중국 비자 필요 (무비자 15일)</li>
                    <li>예약 후 5일 이내 입금</li>
                    <li>출발 14일 전 취소 시 100% 환불</li>
                  </ul>
                </div>
              </div>

              <div className={styles.highlightSection}>
                <h3>이 상품의 특별함</h3>
                <div className={styles.highlights}>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>상하이 야경</h4>
                    <p>와이탄 & 동방명주 야경 크루즈</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>항저우 서호</h4>
                    <p>유네스코 세계문화유산 서호 투어</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>중국 미식</h4>
                    <p>샤오롱바오, 베이징덕 맛집 투어</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>전통 문화</h4>
                    <p>예원, 외탄 역사 지구 탐방</p>
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
                    <span className={styles.dayTitle}>상하이 도착 & 시내 관광</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>10:00 - 인천공항 출발</li>
                    <li>11:30 - 푸동공항 도착</li>
                    <li>13:00 - 점심식사 (샤오롱바오 맛집)</li>
                    <li>15:00 - 예원 관광</li>
                    <li>17:00 - 난징루 쇼핑거리</li>
                    <li>19:00 - 호텔 체크인</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 2</span>
                    <span className={styles.dayTitle}>상하이 명소 투어</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>09:00 - 동방명주 전망대</li>
                    <li>12:00 - 점심식사</li>
                    <li>14:00 - 상하이 박물관</li>
                    <li>16:00 - 신천지 거리</li>
                    <li>19:00 - 와이탄 야경 크루즈</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 3</span>
                    <span className={styles.dayTitle}>항저우 이동 & 서호 관광</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식 및 체크아웃</li>
                    <li>10:00 - 고속철로 항저우 이동</li>
                    <li>12:00 - 항저우 점심식사</li>
                    <li>14:00 - 서호 유람선 투어</li>
                    <li>16:00 - 뢰펑탑 관광</li>
                    <li>18:00 - 호텔 체크인</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 4</span>
                    <span className={styles.dayTitle}>항저우 & 상하이 복귀</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>09:00 - 룽징차 농장 방문</li>
                    <li>11:00 - 링인사 관광</li>
                    <li>13:00 - 점심식사</li>
                    <li>15:00 - 상하이 복귀</li>
                    <li>18:00 - 자유시간</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 5</span>
                    <span className={styles.dayTitle}>상하이 자유여행</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>10:00 - 톈즈팡 예술거리</li>
                    <li>13:00 - 점심식사</li>
                    <li>15:00 - 상하이 타워 (선택)</li>
                    <li>18:00 - 쇼핑 및 자유시간</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 6</span>
                    <span className={styles.dayTitle}>귀국</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식 및 체크아웃</li>
                    <li>10:00 - 푸동공항 이동</li>
                    <li>13:00 - 푸동공항 출발</li>
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
                  <div className={styles.scoreNumber}>4.7</div>
                  <div className={styles.scoreStars}>⭐⭐⭐⭐⭐</div>
                  <div className={styles.reviewCount}>총 189개 후기</div>
                </div>
              </div>
              <div className={styles.reviews}>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>송**</span>
                    <span className={styles.reviewDate}>2024.11.16</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    상하이 야경이 정말 환상적이었어요! 와이탄 크루즈에서 본 동방명주와 고층빌딩들이 너무 아름다웠습니다. 한국어 가이드님도 친절하셨어요.
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>윤**</span>
                    <span className={styles.reviewDate}>2024.11.11</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    항저우 서호가 정말 아름다웠습니다. 중국의 역사와 문화를 제대로 느낄 수 있었고, 음식도 맛있었어요. 추천합니다!
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>한**</span>
                    <span className={styles.reviewDate}>2024.11.07</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    전반적으로 만족스러운 여행이었습니다. 일정이 약간 빡빡했지만, 알차게 구성되어 있어서 좋았어요. 다음에 또 이용하고 싶습니다.
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

