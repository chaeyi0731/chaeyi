import Image from 'next/image';
import './globals.scss';
import './page.module.css';

export default function Home() {
  return (
    <main>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">src/app/page.tsx</code>
        </p>
        <div>
          <a href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
            By <Image src="/vercel.svg" alt="Vercel Logo" className="vercelLogo" width={100} height={24} priority />
          </a>
        </div>
      </div>

      <div className="center">
        <Image src="/next.svg" alt="Next.js Logo" className="logo" width={180} height={37} priority />
      </div>

      <div className="grid">{/* 링크 및 카드 요소들 */}</div>
    </main>
  );
}
