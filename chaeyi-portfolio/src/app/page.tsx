import Image from 'next/image';
import './globals.scss';
import './page.module.css';
import NavigationItem from '../component/NavigationItem';

export default function Home() {
  return (
    <main>
      <div>
        <NavigationItem path="/profile">profile</NavigationItem>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
