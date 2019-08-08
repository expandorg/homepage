import { h } from 'preact';

import styles from './Layout.module.css';

export function Content({ children }) {
  return <div className={styles.content}>{children}</div>;
}

export function Left({ children }) {
  return <div className={styles.left}>{children}</div>;
}

export function Right({ children }) {
  return <div className={styles.right}>{children}</div>;
}
