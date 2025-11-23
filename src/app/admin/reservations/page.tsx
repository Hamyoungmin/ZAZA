'use client';

import { useState, useEffect } from 'react';
import styles from './reservations.module.css';

interface Reservation {
  id: string;
  customer_name: string;
  customer_phone: string;
  travel_date: string;
  passengers: number;
  total_amount: number;
  status: '예약 대기' | '예약 확정' | '결제 완료' | '여행 완료' | '취소';
  created_at: string;
  product?: {
    name: string;
  };
}

export default function ReservationsPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchReservations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterStatus]);

  const fetchReservations = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filterStatus !== '전체') params.append('status', filterStatus);
      
      const response = await fetch(`/api/reservations?${params.toString()}`);
      const data = await response.json();
      
      if (response.ok) {
        setReservations(data);
      }
    } catch (error) {
      console.error('Error fetching reservations:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredReservations = reservations.filter((reservation) => {
    const matchesSearch =
      reservation.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.product?.name?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR').format(amount) + '원';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '예약 대기':
        return styles.statusWaiting;
      case '예약 확정':
        return styles.statusConfirmed;
      case '결제 완료':
        return styles.statusPaid;
      case '여행 완료':
        return styles.statusCompleted;
      case '취소':
        return styles.statusCancelled;
      default:
        return '';
    }
  };

  const statusStats = {
    total: reservations.length,
    waiting: reservations.filter((r) => r.status === '예약 대기').length,
    confirmed: reservations.filter((r) => r.status === '예약 확정').length,
    paid: reservations.filter((r) => r.status === '결제 완료').length,
    cancelled: reservations.filter((r) => r.status === '취소').length,
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>로딩 중...</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>예약 관리</h1>
          <p className={styles.subtitle}>고객 예약을 확인하고 관리하세요</p>
        </div>
      </div>

      {/* 통계 카드 */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>전체 예약</div>
          <div className={styles.statValue}>{statusStats.total}건</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>예약 대기</div>
          <div className={`${styles.statValue} ${styles.waiting}`}>{statusStats.waiting}건</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>예약 확정</div>
          <div className={`${styles.statValue} ${styles.confirmed}`}>{statusStats.confirmed}건</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>결제 완료</div>
          <div className={`${styles.statValue} ${styles.paid}`}>{statusStats.paid}건</div>
        </div>
      </div>

      {/* 필터 및 검색 */}
      <div className={styles.filterSection}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="고객명 또는 상품명으로 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className={styles.filterSelect}
        >
          <option value="전체">전체 상태</option>
          <option value="예약 대기">예약 대기</option>
          <option value="예약 확정">예약 확정</option>
          <option value="결제 완료">결제 완료</option>
          <option value="여행 완료">여행 완료</option>
          <option value="취소">취소</option>
        </select>
      </div>

      {/* 예약 테이블 */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>예약번호</th>
              <th>고객명</th>
              <th>연락처</th>
              <th>상품명</th>
              <th>예약일</th>
              <th>출발일</th>
              <th>인원</th>
              <th>금액</th>
              <th>상태</th>
              <th>작업</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservations.map((reservation) => (
              <tr key={reservation.id}>
                <td className={styles.reservationId}>#{reservation.id.substring(0, 8)}</td>
                <td className={styles.customerName}>{reservation.customer_name}</td>
                <td>{reservation.customer_phone}</td>
                <td>{reservation.product?.name || '-'}</td>
                <td>{formatDate(reservation.created_at)}</td>
                <td>{formatDate(reservation.travel_date)}</td>
                <td>{reservation.passengers}명</td>
                <td className={styles.amount}>{formatCurrency(reservation.total_amount)}</td>
                <td>
                  <span className={`${styles.statusBadge} ${getStatusColor(reservation.status)}`}>
                    {reservation.status}
                  </span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.viewButton}>상세</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredReservations.length === 0 && (
        <div className={styles.emptyState}>
          <p>검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  );
}

