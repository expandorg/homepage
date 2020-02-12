import { h } from 'preact';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>© Expand 2020</div>
    </div>
  );
}
