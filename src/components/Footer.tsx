import styles from './Footer.module.css';

const footerLinks = [
  'FOOT MENU',
  'FOOT MENU',
  'FOOT MENU',
  'FOOT MENU',
  'FOOT MENU',
  'FOOT MENU',
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <nav className={styles.footerNav}>
          {footerLinks.map((link, index) => (
            <span key={index}>
              {link}
              {index < footerLinks.length - 1 && (
                <span className={styles.separator}>|</span>
              )}
            </span>
          ))}
        </nav>
        <p className={styles.copyright}>Copyright by OOO All right reserved</p>
      </div>
    </footer>
  );
}

