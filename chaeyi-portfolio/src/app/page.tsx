import Image from 'next/image';
import Link from 'next/link';
import './globals.scss';
import './page.module.scss';

export default function Home() {
  return (
    <main>
      <div className="rootDiv">
        <div className="mainWidgets">
          <Link href="/profile" style={{ textDecoration: 'none' }}>
            <div className="maindiv"> Profile</div>
          </Link>
          <Link href="/project" style={{ textDecoration: 'none' }}>
            <div className="maindiv">Project</div>
          </Link>
          <Link href="/stack" style={{ textDecoration: 'none' }}>
            <div className="maindiv">Stack</div>
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <div className="maindiv">Contact</div>
          </Link>
        </div>
      </div>
    </main>
  );
}
