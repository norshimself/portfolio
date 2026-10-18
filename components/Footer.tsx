import Link from 'next/link';

export default function Footer() {
  const items = Array(8).fill(null);

  return (
    <footer className="footer-section">
      <div className="footer-marquee">
        <div className="marquee-track">
          {[...items, ...items].map((_, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-text">Let&apos;s Work Together</span>
              <span className="marquee-star" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Nasroallah Elidrissi. All Rights Reserved.
        </p>
        <nav className="footer-links" aria-label="Footer links">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Writing</Link>
          <Link href="/#works">Work</Link>
          <Link href="/#contact">Contact</Link>
          <a href="mailto:nasroallah.elidrissi@gmail.com">Email</a>
        </nav>
      </div>
    </footer>
  );
}
