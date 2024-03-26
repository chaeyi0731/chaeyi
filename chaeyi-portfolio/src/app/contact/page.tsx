'use client';
import Navbar from '../../component/navbar';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <main>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <div className="rootDiv">
          <div>
            <h1>Contact</h1>
            <Navbar activeMenu="Contact" />
            <div className="mainWidgets">
              <div>
                <h3>함께 하실 준비가 되셨나요?</h3>
              </div>
              <div className="contact">
                <div className="contextDiv">
                  <a href="https://github.com/chaeyi0731" target="_blank" rel="noopener noreferrer">
                    <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566899596/noticon/slhw4nu8hybreryigopq.png" />
                    <span>chaeyi0731</span>
                  </a>
                </div>
                <div className="contextDiv">
                  <a href="https://instagram.com/heimish731" target="_blank" rel="noopener noreferrer">
                    <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008788/noticon/bqjhb6xvljt9viccy6lh.png" />
                    <span>heimish731</span>
                  </a>
                </div>
                <div className="contextDiv">
                  <a href="mailto:chaeyi990731@gmail.com">
                    <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606895317/noticon/cffnbxeed08p0l4u44ru.png" />
                    <span>chaeyi990731@gmail.com</span>
                  </a>
                </div>
                <div className="contextDiv">
                  <Link href="tel:010-3048-4755" passHref>
                    <div>
                      <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624802086/noticon/ratqkpzs9e61yrkxw9gx.png" alt="Phone" />
                      <span>Click to call</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
