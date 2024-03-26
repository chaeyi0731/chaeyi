'use client';
import Link from 'next/link';
import './globals.scss';
import './page.module.css';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <div className="rootDiv">
          <h1 className="title">풀스택 개발자 </h1>
          <div className="mainWidgets">
            <Link href="/aboutme" style={{ textDecoration: 'none' }}>
              <div className="maindiv"> About Me</div>
            </Link>
            <Link href="/project" style={{ textDecoration: 'none' }}>
              <div className="maindiv">Project</div>
            </Link>
            <Link href="/skill" style={{ textDecoration: 'none' }}>
              <div className="maindiv">Skills</div>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <div className="maindiv">Contact</div>
            </Link>
          </div>
        </div>
      </motion.main>
    </main>
  );
}
