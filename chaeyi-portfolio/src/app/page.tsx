import Image from 'next/image';
import Link from 'next/link';
import './globals.scss';
import './page.module.css';

export default function Home() {
  return (
    <main>
      <div className="rootDiv">
        <h1 className="title">풀스택 개발자 </h1>
        <div className="mainWidgets">
          <Link href="/aboutme" style={{ textDecoration: 'none' }}>
            <div className="maindiv"> About Me</div>
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
