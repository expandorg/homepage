import { h } from 'preact';

import SectionHeader from '../shared/Section/Header';

import man2 from './man2.png';

import styles from './Cases.module.css';

export default function Cases() {
  return (
    <div className={styles.container}>
      <SectionHeader title="What do we do?" color="yellow" />
      <img src={man2} className={styles.man2} />
      <div className={styles.cc} />
    </div>
  );
}
