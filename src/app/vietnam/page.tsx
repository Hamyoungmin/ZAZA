'use client';

import { useState } from 'react';
import styles from '../detail/detail.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VietnamPage() {
  const [selectedTab, setSelectedTab] = useState<'info' | 'schedule' | 'review'>('info');

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <Header />

      {/* 상세 히어로 섹션 */}
      <section className={styles.detailHero}>
        <div className={styles.heroImageContainer}>
          <img src="/tourism-sea-sky-vacation-wallpaper-preview.jpg" alt="베트남 여행" className={styles.heroImage} />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>다낭&호이안 완전정복 4박 5일</h1>
              <p className={styles.heroSubtitle}>바나힐 + 호이안 야시장 + 미케 비치</p>
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
              <span className={styles.originalPrice}>950,000원</span>
              <span className={styles.discountBadge}>35% 할인</span>
            </div>
            <div className={styles.finalPrice}>620,000원</div>
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
                    <li>왕복 항공권 (인천-다낭)</li>
                    <li>4박 숙박 (5성급 리조트)</li>
                    <li>전 일정 조식 및 중식</li>
                    <li>전용 차량 및 한국어 가이드</li>
                    <li>입장료 및 케이블카 탑승권</li>
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
                    <li>최소 출발 인원: 4명</li>
                    <li>무비자 45일 체류 가능</li>
                    <li>예약 후 3일 이내 입금</li>
                    <li>출발 5일 전 취소 시 100% 환불</li>
                  </ul>
                </div>
              </div>

              <div className={styles.highlightSection}>
                <h3>이 상품의 특별함</h3>
                <div className={styles.highlights}>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>바나힐</h4>
                    <p>황금 다리 & 케이블카 체험</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>호이안 야시장</h4>
                    <p>유네스코 문화유산 고대도시</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>미케 비치</h4>
                    <p>세계 6대 아름다운 해변</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>베트남 미식</h4>
                    <p>쌀국수, 반미, 생춘권 맛집 투어</p>
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
                    <span className={styles.dayTitle}>다낭 도착 & 시내 관광</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>10:00 - 인천공항 출발</li>
                    <li>13:30 - 다낭 국제공항 도착</li>
                    <li>15:00 - 리조트 체크인</li>
                    <li>17:00 - 미케 비치 산책</li>
                    <li>19:00 - 환영 만찬 (해산물 BBQ)</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 2</span>
                    <span className={styles.dayTitle}>바나힐 투어</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>09:00 - 바나힐 출발</li>
                    <li>10:00 - 세계 최장 케이블카 탑승</li>
                    <li>11:00 - 황금 다리 (골든 브릿지)</li>
                    <li>13:00 - 점심 뷔페</li>
                    <li>15:00 - 프렌치 빌리지 관광</li>
                    <li>18:00 - 호텔 복귀</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 3</span>
                    <span className={styles.dayTitle}>호이안 고대도시 투어</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>09:00 - 오행산 (마블 마운틴)</li>
                    <li>11:00 - 호이안 이동</li>
                    <li>12:00 - 까오라우 점심</li>
                    <li>14:00 - 호이안 고대도시 투어</li>
                    <li>16:00 - 전통 의상 체험</li>
                    <li>18:00 - 호이안 야시장 & 랜턴 축제</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 4</span>
                    <span className={styles.dayTitle}>자유여행 (리조트 휴식)</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>10:00 - 리조트 풀장 & 해변</li>
                    <li>12:00 - 리조트 레스토랑 점심</li>
                    <li>14:00 - 스파 & 마사지 (선택)</li>
                    <li>17:00 - 다낭 대성당 & 용 다리</li>
                    <li>19:00 - 한 시장 야시장</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 5</span>
                    <span className={styles.dayTitle}>귀국</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식 및 체크아웃</li>
                    <li>10:00 - 마지막 쇼핑</li>
                    <li>12:00 - 공항 이동</li>
                    <li>14:30 - 다낭 공항 출발</li>
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
                  <div className={styles.reviewCount}>총 298개 후기</div>
                </div>
              </div>
              <div className={styles.reviews}>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>임**</span>
                    <span className={styles.reviewDate}>2024.11.21</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    바나힐의 황금 다리가 정말 장관이었어요! 사진도 예쁘게 나오고, 리조트도 너무 좋았습니다. 가족여행으로 최고였어요. 강력 추천합니다!
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>홍**</span>
                    <span className={styles.reviewDate}>2024.11.17</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    호이안 야시장이 너무 로맨틱했습니다. 랜턴 불빛 아래서 걷는 게 정말 멋있었어요. 음식도 맛있고, 가격도 저렴해서 좋았습니다!
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>권**</span>
                    <span className={styles.reviewDate}>2024.11.12</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    신혼여행으로 다녀왔는데 완벽했습니다. 리조트 시설도 최고고, 미케 비치도 정말 아름다웠어요. 가이드님도 친절하시고 다음에 또 오고 싶어요!
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

