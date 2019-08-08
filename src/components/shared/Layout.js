import { h } from 'preact';
import cn from 'classnames';

import styles from './Layout.module.css';

export function Content({ children }) {
  return <div className={styles.content}>{children}</div>;
}

export function Left({ children }) {
  return <div className={styles.left}>{children}</div>;
}

export function Right({ children, className }) {
  return <div className={cn(styles.right, className)}>{children}</div>;
}
