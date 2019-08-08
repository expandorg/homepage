import { h } from 'preact';

import Line from '../shared/Line';
import styles from './Cases.module.css';

export default function Cases() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>What do we do?</div>
        <Line />
      </div>
    </div>
  );
}
