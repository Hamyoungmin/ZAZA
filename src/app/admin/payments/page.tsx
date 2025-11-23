'use client';

import { useState, useEffect } from 'react';
import styles from './payments.module.css';

interface Payment {
  id: string;
  reservation_id: string;
  amount: number;
  method: '카드' | '계좌이체' | '가상계좌' | '간편결제';
  status: '완료' | '대기' | '실패' | '환불';
  created_at: string;
  reservation?: {
    customer_name: string;
    customer_phone: string;
    product?: {
      name: string;
    };
  };
}

export default function PaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>('전체');
  const [filterMethod, setFilterMethod] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPayments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterStatus, filterMethod]);

  const fetchPayments = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filterStatus !== '전체') params.append('status', filterStatus);
      if (filterMethod !== '전체') params.append('method', filterMethod);
      
      const response = await fetch(`/api/payments?${params.toString()}`);
      const data = await response.json();
      
      if (response.ok) {
        setPayments(data);
      }
    } catch (error) {
      console.error('Error fetching payments:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPayments = payments.filter((payment) => {
    if (!searchTerm) return true;
    const customerName = payment.reservation?.customer_name || '';
    const productName = payment.reservation?.product?.name || '';
    return customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
           productName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR').format(amount) + '원';
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('ko-KR');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '완료':
        return styles.statusCompleted;
      case '대기':
        return styles.statusPending;
      case '실패':
        return styles.statusFailed;
      case '환불':
        return styles.statusRefunded;
      default:
        return '';
    }
  };

  const paymentStats = {
    totalAmount: payments.filter((p) => p.status === '완료').reduce((sum, p) => sum + p.amount, 0),
    completedCount: payments.filter((p) => p.status === '완료').length,
    pendingCount: payments.filter((p) => p.status === '대기').length,
    refundedAmount: payments.filter((p) => p.status === '환불').reduce((sum, p) => sum + p.amount, 0),
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
          <h1 className={styles.title}>결제 관리</h1>
          <p className={styles.subtitle}>결제 내역을 확인하고 관리하세요</p>
        </div>
      </div>

      {/* 통계 카드 */}
      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.statCard1}`}>
          <div>
            <div className={styles.statLabel}>총 결제액</div>
            <div className={styles.statValue}>{formatCurrency(paymentStats.totalAmount)}</div>
          </div>
        </div>
        <div className={`${styles.statCard} ${styles.statCard2}`}>
          <div>
            <div className={styles.statLabel}>완료</div>
            <div className={styles.statValue}>{paymentStats.completedCount}건</div>
          </div>
        </div>
        <div className={`${styles.statCard} ${styles.statCard3}`}>
          <div>
            <div className={styles.statLabel}>대기</div>
            <div className={styles.statValue}>{paymentStats.pendingCount}건</div>
          </div>
        </div>
        <div className={`${styles.statCard} ${styles.statCard4}`}>
          <div>
            <div className={styles.statLabel}>환불액</div>
            <div className={styles.statValue}>{formatCurrency(paymentStats.refundedAmount)}</div>
          </div>
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
        <div className={styles.filters}>
          <select
            value={filterMethod}
            onChange={(e) => setFilterMethod(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="전체">전체 결제수단</option>
            <option value="카드">카드</option>
            <option value="계좌이체">계좌이체</option>
            <option value="가상계좌">가상계좌</option>
            <option value="간편결제">간편결제</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="전체">전체 상태</option>
            <option value="완료">완료</option>
            <option value="대기">대기</option>
            <option value="실패">실패</option>
            <option value="환불">환불</option>
          </select>
        </div>
      </div>

      {/* 결제 테이블 */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>결제번호</th>
              <th>예약번호</th>
              <th>고객명</th>
              <th>상품명</th>
              <th>결제금액</th>
              <th>결제수단</th>
              <th>결제일시</th>
              <th>상태</th>
              <th>작업</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment) => (
              <tr key={payment.id}>
                <td className={styles.paymentId}>#{payment.id.substring(0, 8)}</td>
                <td className={styles.reservationId}>#{payment.reservation_id.substring(0, 8)}</td>
                <td className={styles.customerName}>{payment.reservation?.customer_name || '-'}</td>
                <td>{payment.reservation?.product?.name || '-'}</td>
                <td className={styles.amount}>{formatCurrency(payment.amount)}</td>
                <td>
                  <span className={styles.methodBadge}>{payment.method}</span>
                </td>
                <td>{formatDateTime(payment.created_at)}</td>
                <td>
                  <span className={`${styles.statusBadge} ${getStatusColor(payment.status)}`}>
                    {payment.status}
                  </span>
                </td>
                <td>
                  <button className={styles.viewButton}>상세</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredPayments.length === 0 && (
        <div className={styles.emptyState}>
          <p>검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  );
}

