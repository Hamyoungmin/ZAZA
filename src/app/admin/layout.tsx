'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './admin.module.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { 
      title: '대시보드', 
      icon: '', 
      href: '/admin',
      items: []
    },
    {
      title: '여행 상품 관리',
      icon: '',
      href: '/admin/products',
      items: [
        { title: '상품 목록', href: '/admin/products' },
        { title: '상품 등록', href: '/admin/products/new' },
        { title: '카테고리 관리', href: '/admin/products/categories' },
      ]
    },
    {
      title: '예약 관리',
      icon: '',
      href: '/admin/reservations',
      items: [
        { title: '예약 목록', href: '/admin/reservations' },
        { title: '취소/환불', href: '/admin/reservations/cancellations' },
      ]
    },
    {
      title: '회원 관리',
      icon: '',
      href: '/admin/users',
      items: [
        { title: '회원 목록', href: '/admin/users' },
        { title: '회원 등급', href: '/admin/users/grades' },
      ]
    },
    {
      title: '결제 관리',
      icon: '',
      href: '/admin/payments',
      items: [
        { title: '결제 내역', href: '/admin/payments' },
        { title: '환불 처리', href: '/admin/payments/refunds' },
      ]
    },
    {
      title: '리뷰 관리',
      icon: '',
      href: '/admin/reviews',
      items: []
    },
    {
      title: '문의 관리',
      icon: '',
      href: '/admin/inquiries',
      items: [
        { title: '1:1 문의', href: '/admin/inquiries' },
        { title: 'FAQ 관리', href: '/admin/inquiries/faq' },
      ]
    },
    {
      title: '콘텐츠 관리',
      icon: '',
      href: '/admin/contents',
      items: [
        { title: '배너 관리', href: '/admin/contents/banners' },
        { title: '공지사항', href: '/admin/contents/notices' },
        { title: '이벤트', href: '/admin/contents/events' },
      ]
    },
    {
      title: '프로모션',
      icon: '',
      href: '/admin/promotions',
      items: [
        { title: '쿠폰 관리', href: '/admin/promotions/coupons' },
        { title: '타임딜', href: '/admin/promotions/timedeals' },
      ]
    },
    {
      title: '통계 & 리포트',
      icon: '',
      href: '/admin/statistics',
      items: []
    },
    {
      title: '설정',
      icon: '',
      href: '/admin/settings',
      items: []
    },
  ];

  return (
    <div className={styles.adminLayout}>
      {/* 사이드바 */}
      <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.adminTitle}>관리자 패널</h2>
          <button 
            className={styles.toggleButton}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="사이드바 토글"
          >
            {isSidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav className={styles.sidebarNav}>
          {menuItems.map((item, index) => (
            <div key={index} className={styles.menuGroup}>
              <Link 
                href={item.href}
                className={`${styles.menuItem} ${pathname === item.href ? styles.activeMenuItem : ''}`}
              >
                <span className={styles.menuIcon}>{item.icon}</span>
                {isSidebarOpen && <span className={styles.menuTitle}>{item.title}</span>}
              </Link>
              
              {isSidebarOpen && item.items.length > 0 && (
                <div className={styles.subMenu}>
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className={`${styles.subMenuItem} ${pathname === subItem.href ? styles.activeSubMenuItem : ''}`}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <Link href="/" className={styles.backButton}>
            {isSidebarOpen ? (
              <span>메인으로 돌아가기</span>
            ) : (
              <svg
                className={styles.backIcon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                  fill="white"
                />
              </svg>
            )}
          </Link>
        </div>
      </aside>

      {/* 메인 콘텐츠 영역 */}
      <div className={styles.mainContent}>
        <header className={styles.adminHeader}>
          <div className={styles.headerLeft}>
            <h1 className={styles.pageTitle}>ZAZA 관리자</h1>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.adminUser}>관리자님</span>
            <button className={styles.logoutButton}>로그아웃</button>
          </div>
        </header>

        <main className={styles.contentArea}>
          {children}
        </main>
      </div>
    </div>
  );
}

