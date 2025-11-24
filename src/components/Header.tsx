import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.leftSection}>
          <Image 
            src="/logo.png" 
            alt="로고" 
            width={40} 
            height={40}
            className={styles.logo}
          />
          <h1 className={styles.headerTitle}>
            <span>오똘</span>
          </h1>
        </div>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            여행사
          </Link>
          <Link href="/detail" className={styles.navLink}>
            제주도
          </Link>
          <Link href="/japan" className={styles.navLink}>
            일본
          </Link>
          <Link href="/china" className={styles.navLink}>
            중국
          </Link>
          <Link href="/usa" className={styles.navLink}>
            미국
          </Link>
          <Link href="/thailand" className={styles.navLink}>
            태국
          </Link>
          <Link href="/vietnam" className={styles.navLink}>
            베트남
          </Link>
          <Link href="/maldives" className={styles.navLink}>
            몰디브
          </Link>
          <Link href="/italy" className={styles.navLink}>
            이탈리아
          </Link>
        </nav>
      </div>
      <div className={styles.headerLine}></div>
    </header>
  );
}

