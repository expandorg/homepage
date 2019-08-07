import { h } from 'preact';

import './base.css';

import styles from './Page.module.css';

export default function Page({ children }) {
  return <div className={styles.container}>{children}</div>;
}
