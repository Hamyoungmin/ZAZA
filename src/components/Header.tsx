import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.leftSection}>
          <span className={styles.infoIcon}>ⓘ</span>
          <h1 className={styles.headerTitle}>
            <Link href="/">Welcome to JEJU Island</Link>
          </h1>
        </div>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            메인 페이지
          </Link>
          <Link href="/detail" className={styles.navLink}>
            상세 페이지
          </Link>
        </nav>
      </div>
      <div className={styles.headerLine}></div>
    </header>
  );
}

