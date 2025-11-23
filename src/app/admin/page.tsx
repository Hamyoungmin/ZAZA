'use client';

import { useState, useEffect } from 'react';
import styles from './dashboard.module.css';

interface DashboardStats {
  todayReservations: number;
  todaySales: number;
  newMembers: number;
  pendingInquiries: number;
}

interface RecentReservation {
  id: string;
  customer_name: string;
  total_amount: number;
  status: string;
  created_at: string;
  product?: {
    name: string;
  };
}

interface PopularProduct {
  id: string;
  name: string;
  sales_count: number;
  price: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    todayReservations: 0,
    todaySales: 0,
    newMembers: 0,
    pendingInquiries: 0,
  });
  const [recentReservations, setRecentReservations] = useState<RecentReservation[]>([]);
  const [popularProducts, setPopularProducts] = useState<PopularProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/dashboard');
      const data = await response.json();
      
      if (response.ok) {
        setStats(data.stats);
        setRecentReservations(data.recentReservations || []);
        setPopularProducts(data.popularProducts || []);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR').format(amount) + '원';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '예약 확정':
        return styles.statusConfirmed;
      case '결제 대기':
        return styles.statusPending;
      case '취소 요청':
        return styles.statusCancelled;
      default:
        return '';
    }
  };

  if (loading) {
    return (
      <div className={styles.dashboard}>
        <div className={styles.loading}>로딩 중...</div>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>대시보드</h1>
        <p className={styles.subtitle}>오늘의 현황을 한눈에 확인하세요</p>
      </div>

      {/* 통계 카드 */}
      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.statCard1}`}>
          <div className={styles.statContent}>
            <h3 className={styles.statLabel}>오늘의 예약</h3>
            <p className={styles.statValue}>{stats.todayReservations}건</p>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.statCard2}`}>
          <div className={styles.statContent}>
            <h3 className={styles.statLabel}>오늘의 매출</h3>
            <p className={styles.statValue}>{formatCurrency(stats.todaySales)}</p>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.statCard3}`}>
          <div className={styles.statContent}>
            <h3 className={styles.statLabel}>신규 회원</h3>
            <p className={styles.statValue}>{stats.newMembers}명</p>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.statCard4}`}>
          <div className={styles.statContent}>
            <h3 className={styles.statLabel}>미답변 문의</h3>
            <p className={styles.statValue}>{stats.pendingInquiries}건</p>
          </div>
        </div>
      </div>

      {/* 최근 예약 현황 */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>최근 예약 현황</h2>
          <button className={styles.viewAllButton}>전체보기 →</button>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>예약번호</th>
                <th>고객명</th>
                <th>상품명</th>
                <th>예약일</th>
                <th>금액</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
            {recentReservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>#{reservation.id.substring(0, 8)}</td>
                <td>{reservation.customer_name}</td>
                <td>{reservation.product?.name || '-'}</td>
                <td>{formatDate(reservation.created_at)}</td>
                <td className={styles.amount}>{formatCurrency(reservation.total_amount)}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${getStatusColor(reservation.status)}`}>
                      {reservation.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 인기 상품 TOP 5 */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>인기 상품 TOP 5</h2>
        </div>
        <div className={styles.rankingContainer}>
          {popularProducts.map((product, index) => (
            <div key={product.id} className={styles.rankItem}>
              <div className={styles.rankBadge}>
                {index + 1}
              </div>
              <div className={styles.rankContent}>
                <h4 className={styles.rankTitle}>{product.name}</h4>
                <div className={styles.rankStats}>
                  <span className={styles.rankSales}>판매: {product.sales_count}건</span>
                  <span className={styles.rankRevenue}>매출: {formatCurrency(product.price * product.sales_count)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

