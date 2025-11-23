'use client';

import { useState, useEffect } from 'react';
import styles from './users.module.css';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  grade: 'VIP' | 'VVIP' | '일반';
  created_at: string;
  reservation_count: number;
  total_spent: number;
  status: '활동' | '휴면' | '탈퇴';
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGrade, setFilterGrade] = useState<string>('전체');
  const [filterStatus, setFilterStatus] = useState<string>('전체');

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterGrade, filterStatus]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filterGrade !== '전체') params.append('grade', filterGrade);
      if (filterStatus !== '전체') params.append('status', filterStatus);
      
      const response = await fetch(`/api/users?${params.toString()}`);
      const data = await response.json();
      
      if (response.ok) {
        setUsers(data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR').format(amount) + '원';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR');
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'VVIP':
        return styles.gradeVVIP;
      case 'VIP':
        return styles.gradeVIP;
      case '일반':
        return styles.gradeNormal;
      default:
        return '';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '활동':
        return styles.statusActive;
      case '휴면':
        return styles.statusDormant;
      case '탈퇴':
        return styles.statusWithdrawn;
      default:
        return '';
    }
  };

  const userStats = {
    total: users.length,
    vvip: users.filter((u) => u.grade === 'VVIP').length,
    vip: users.filter((u) => u.grade === 'VIP').length,
    normal: users.filter((u) => u.grade === '일반').length,
    active: users.filter((u) => u.status === '활동').length,
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
          <h1 className={styles.title}>회원 관리</h1>
          <p className={styles.subtitle}>회원 정보를 확인하고 관리하세요</p>
        </div>
      </div>

      {/* 통계 카드 */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div>
            <div className={styles.statLabel}>전체 회원</div>
            <div className={styles.statValue}>{userStats.total}명</div>
          </div>
        </div>
        <div className={styles.statCard}>
          <div>
            <div className={styles.statLabel}>VVIP</div>
            <div className={styles.statValue}>{userStats.vvip}명</div>
          </div>
        </div>
        <div className={styles.statCard}>
          <div>
            <div className={styles.statLabel}>VIP</div>
            <div className={styles.statValue}>{userStats.vip}명</div>
          </div>
        </div>
        <div className={styles.statCard}>
          <div>
            <div className={styles.statLabel}>활동 회원</div>
            <div className={styles.statValue}>{userStats.active}명</div>
          </div>
        </div>
      </div>

      {/* 필터 및 검색 */}
      <div className={styles.filterSection}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="회원명 또는 이메일로 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filters}>
          <select
            value={filterGrade}
            onChange={(e) => setFilterGrade(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="전체">전체 등급</option>
            <option value="VVIP">VVIP</option>
            <option value="VIP">VIP</option>
            <option value="일반">일반</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="전체">전체 상태</option>
            <option value="활동">활동</option>
            <option value="휴면">휴면</option>
            <option value="탈퇴">탈퇴</option>
          </select>
        </div>
      </div>

      {/* 회원 테이블 */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>회원번호</th>
              <th>이름</th>
              <th>이메일</th>
              <th>연락처</th>
              <th>등급</th>
              <th>가입일</th>
              <th>예약 횟수</th>
              <th>총 결제액</th>
              <th>상태</th>
              <th>작업</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className={styles.userId}>#{user.id.substring(0, 8)}</td>
                <td className={styles.userName}>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <span className={`${styles.gradeBadge} ${getGradeColor(user.grade)}`}>
                    {user.grade}
                  </span>
                </td>
                <td>{formatDate(user.created_at)}</td>
                <td>{user.reservation_count}회</td>
                <td className={styles.amount}>{formatCurrency(user.total_spent)}</td>
                <td>
                  <span className={`${styles.statusBadge} ${getStatusColor(user.status)}`}>
                    {user.status}
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

      {filteredUsers.length === 0 && (
        <div className={styles.emptyState}>
          <p>검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  );
}

