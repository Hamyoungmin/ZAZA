'use client';

import { useState } from 'react';
import styles from './detail.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DetailPage() {
  const [selectedTab, setSelectedTab] = useState<'info' | 'schedule' | 'review'>('info');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    travelDate: '',
    passengers: 1,
    specialRequests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer_name: formData.name,
          customer_phone: formData.phone,
          customer_email: formData.email,
          travel_date: formData.travelDate,
          passengers: Number(formData.passengers),
          total_amount: 245000 * Number(formData.passengers),
          status: '예약 대기',
          special_requests: formData.specialRequests,
          product_id: null, // 실제로는 상품 ID를 전달해야 합니다
        }),
      });

      if (response.ok) {
        alert('예약이 완료되었습니다! 담당자가 곧 연락드리겠습니다.');
        setIsModalOpen(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          travelDate: '',
          passengers: 1,
          specialRequests: '',
        });
      } else {
        alert('예약에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Reservation error:', error);
      alert('예약 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <Header />

      {/* 상세 히어로 섹션 */}
      <section className={styles.detailHero}>
        <div className={styles.heroImageContainer}>
          <img src="/photo-1609766418204-94aae0ecfdfc.jpg" alt="제주 여행" className={styles.heroImage} />
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
                    <li>왕복 항공권 (김포-제주)</li>
                    <li>3박 숙박 (4성급 호텔)</li>
                    <li>전 일정 조식</li>
                    <li>전용 차량 및 가이드</li>
                    <li>입장료 및 체험비</li>
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
                    <li>최소 출발 인원: 4명</li>
                    <li>날씨에 따라 일정 변경 가능</li>
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
                    <h4>핵심 명소</h4>
                    <p>성산일출봉, 한라산, 협재해변 등 제주 필수 코스</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>맛집 투어</h4>
                    <p>현지인만 아는 숨은 맛집 3곳 포함</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
                    <h4>포토 스팟</h4>
                    <p>인스타그램 감성 사진 명소 투어</p>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}></span>
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

      {/* 예약 모달 */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>예약하기</h2>
              <button 
                className={styles.closeButton}
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className={styles.reservationForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">이름 *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="홍길동"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">연락처 *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="010-1234-5678"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="travelDate">출발 희망일 *</label>
                <input
                  type="date"
                  id="travelDate"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="passengers">인원 *</label>
                <select
                  id="passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleInputChange}
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}명</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="specialRequests">특별 요청사항</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="요청사항을 입력해주세요 (선택사항)"
                  rows={4}
                />
              </div>

              <div className={styles.priceInfo}>
                <div className={styles.priceRow}>
                  <span>인원</span>
                  <span>{formData.passengers}명</span>
                </div>
                <div className={styles.priceRow}>
                  <span>1인 가격</span>
                  <span>245,000원</span>
                </div>
                <div className={`${styles.priceRow} ${styles.totalPrice}`}>
                  <span>총 금액</span>
                  <span>{(245000 * formData.passengers).toLocaleString()}원</span>
                </div>
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? '예약 중...' : '예약 신청하기'}
              </button>

              <p className={styles.notice}>
                * 예약 신청 후 담당자가 확인하여 연락드립니다.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

