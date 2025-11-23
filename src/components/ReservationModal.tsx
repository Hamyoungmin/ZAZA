'use client';

import { useState } from 'react';
import styles from '../app/detail/detail.module.css';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productPrice: number;
}

export default function ReservationModal({ 
  isOpen, 
  onClose, 
  productName, 
  productPrice 
}: ReservationModalProps) {
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
          total_amount: productPrice * Number(formData.passengers),
          status: '예약 대기',
          special_requests: formData.specialRequests,
          product_id: null,
        }),
      });

      if (response.ok) {
        alert('예약이 완료되었습니다! 담당자가 곧 연락드리겠습니다.');
        onClose();
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

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>예약하기 - {productName}</h2>
          <button 
            className={styles.closeButton}
            onClick={onClose}
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
              <span>{productPrice.toLocaleString()}원</span>
            </div>
            <div className={`${styles.priceRow} ${styles.totalPrice}`}>
              <span>총 금액</span>
              <span>{(productPrice * formData.passengers).toLocaleString()}원</span>
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
  );
}

