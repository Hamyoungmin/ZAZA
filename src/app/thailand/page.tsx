'use client';

import { useState } from 'react';
import styles from '../detail/detail.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationModal from '@/components/ReservationModal';

export default function ThailandPage() {
  const [selectedTab, setSelectedTab] = useState<'info' | 'schedule' | 'review'>('info');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productName = '방콕&치앙마이 완전정복 5박 6일';
  const productPrice = 840000;

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <Header />

      {/* 상세 히어로 섹션 */}
      <section className={styles.detailHero}>
        <div className={styles.heroImageContainer}>
          <img src="/landmark-pagoda-doi-inthanon-national-park-chiang-mai-thailand_335224-779.avif" alt="태국 여행" className={styles.heroImage} />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>방콕&치앙마이 완전정복 5박 6일</h1>
              <p className={styles.heroSubtitle}>왕궁 + 사원 투어 + 코끼리 체험</p>
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
              <span className={styles.discountBadge}>30% 할인</span>
            </div>
            <div className={styles.finalPrice}>840,000원</div>
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
                    <li>왕복 항공권 (인천-방콕)</li>
                    <li>5박 숙박 (4성급 호텔)</li>
                    <li>전 일정 조식 및 중식</li>
                    <li>전용 차량 및 한국어 가이드</li>
                    <li>입장료 및 코끼리 체험</li>
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
                    <li>최소 출발 인원: 6명</li>
                    <li>무비자 90일 체류 가능</li>
                    <li>예약 후 3일 이내 입금</li>
                    <li>출발 7일 전 취소 시 100% 환불</li>
                  </ul>
                </div>
              </div>

              <div className={styles.highlightSection}>
                <h3>이 상품의 특별함</h3>
                <div className={styles.highlights}>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>왕궁 투어</h4>
                    <p>왕궁 & 에메랄드 사원 관광</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>코끼리 체험</h4>
                    <p>코끼리 캠프 & 먹이주기 체험</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>사원 투어</h4>
                    <p>황금 사원 & 도이수텝 사원</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>태국 미식</h4>
                    <p>팟타이, 똠얌꿍 맛집 투어</p>
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
                    <span className={styles.dayTitle}>방콕 도착</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>09:00 - 인천공항 출발</li>
                    <li>13:00 - 방콕 수완나품 공항 도착</li>
                    <li>15:00 - 호텔 체크인</li>
                    <li>17:00 - 아시아티크 야시장</li>
                    <li>19:00 - 저녁식사 및 자유시간</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 2</span>
                    <span className={styles.dayTitle}>방콕 시내 관광</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>09:00 - 왕궁 & 에메랄드 사원</li>
                    <li>12:00 - 태국 전통 요리 점심</li>
                    <li>14:00 - 왓 포 (와불 사원)</li>
                    <li>16:00 - 짜오프라야 강 크루즈</li>
                    <li>18:00 - 카오산로드 자유시간</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 3</span>
                    <span className={styles.dayTitle}>치앙마이 이동 & 관광</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>06:00 - 호텔 조식 및 체크아웃</li>
                    <li>08:00 - 국내선으로 치앙마이 이동</li>
                    <li>10:00 - 치앙마이 도착</li>
                    <li>12:00 - 점심식사</li>
                    <li>14:00 - 도이수텝 사원 관광</li>
                    <li>17:00 - 호텔 체크인</li>
                    <li>19:00 - 나이트 바자 탐방</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 4</span>
                    <span className={styles.dayTitle}>코끼리 캠프 & 자연 투어</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>09:00 - 코끼리 캠프 이동</li>
                    <li>10:00 - 코끼리 먹이주기 체험</li>
                    <li>12:00 - 점심식사</li>
                    <li>14:00 - 란 치앙마이 농장</li>
                    <li>17:00 - 호텔 복귀</li>
                    <li>19:00 - 전통 칸토크 디너쇼</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 5</span>
                    <span className={styles.dayTitle}>치앙마이 자유여행</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식</li>
                    <li>10:00 - 올드 시티 투어</li>
                    <li>12:00 - 님만해민 거리 카페 투어</li>
                    <li>15:00 - 전통 마사지 체험</li>
                    <li>18:00 - 핑강 리버사이드 저녁</li>
                  </ul>
                </div>
                <div className={styles.scheduleDay}>
                  <div className={styles.dayHeader}>
                    <span className={styles.dayNumber}>DAY 6</span>
                    <span className={styles.dayTitle}>귀국</span>
                  </div>
                  <ul className={styles.scheduleList}>
                    <li>08:00 - 호텔 조식 및 체크아웃</li>
                    <li>10:00 - 공항 이동</li>
                    <li>13:00 - 방콕 경유 인천행</li>
                    <li>21:00 - 인천공항 도착</li>
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
                  <div className={styles.reviewCount}>총 267개 후기</div>
                </div>
              </div>
              <div className={styles.reviews}>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>오**</span>
                    <span className={styles.reviewDate}>2024.11.19</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    태국의 문화를 제대로 느낄 수 있었어요! 왕궁이 정말 화려하고 아름다웠고, 코끼리 체험도 잊을 수 없는 추억입니다. 음식도 너무 맛있었어요!
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>장**</span>
                    <span className={styles.reviewDate}>2024.11.13</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    가족여행으로 완벽했습니다. 방콕과 치앙마이 두 도시를 모두 경험할 수 있어서 좋았고, 아이들도 코끼리 캠프에서 너무 즐거워했어요!
                  </p>
                </div>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewer}>서**</span>
                    <span className={styles.reviewDate}>2024.11.06</span>
                    <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.reviewText}>
                    가이드님이 정말 친절하시고 현지 문화에 대해 자세히 설명해주셔서 좋았습니다. 도이수텝 사원에서 본 치앙마이 전망이 환상적이었어요!
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

