import Link from "next/link";
import styles from "@/styles/components/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>

        {/* Logo SVG no lugar do título */}
        <Link href="/" className={styles.navLogo} aria-label="Ir para o início">
          <img 
            src="/logo.svg" 
            alt="Gabriel Logo" 
            height={44} 
            style={{ display: 'block', width: 'auto' }}
          />
        </Link>

        <ul className={styles.navLinks}>
          <li><Link href="/#about" className={styles.navLink}>Sobre</Link></li>
          <li><Link href="/#projects" className={styles.navLink}>Projetos</Link></li>
          <li><Link href="/#stack" className={styles.navLink}>Stack</Link></li>
          <li><Link href="/#contact" className={styles.navLink}>Contato</Link></li>
          <li><Link href="https://my-blog-ten-delta-70.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Blog</Link></li>
        </ul>

      </div>
    </nav>
  );
}
