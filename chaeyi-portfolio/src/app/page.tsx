import Image from 'next/image';
import Link from 'next/link';
import './globals.scss';
import './page.module.css';

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/profile">
          <div>profile</div>
        </Link>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
