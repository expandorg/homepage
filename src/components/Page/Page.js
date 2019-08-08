import { h } from 'preact';

import './base.css';

import Navbar from './Navbar';
import Footer from './Footer';

import styles from './Page.module.css';

export default function Page({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
