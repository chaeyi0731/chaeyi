import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '신입 개발자 이채이 포트폴리오',
  description: '신입 개발자 이채이의 포트폴리오입니다.',
  icons: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637422104/noticon/tydmzggs2djrjwcqvkuq.gif',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <p className="mainp"> version v1.0.1</p>
      </body>
    </html>
  );
}
