import { h } from 'preact';
import cn from 'classnames';

import styles from './Header.module.css';

export default function Header({ color, title }) {
  return (
    <div className={cn(styles.header, styles[color])}>
      <div className={styles.title}>{title}</div>
      <div className={styles.line} />
    </div>
  );
}
