import { h } from 'preact';

import styles from './Feature.module.css';

export default function Feature({ img, title, text }) {
  return (
    <div className={styles.feature}>
      <div className={styles.preview}>
        <img className={styles.img} src={img} alt={title} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}
