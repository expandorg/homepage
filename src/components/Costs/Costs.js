import { h } from 'preact';

import SectionHeader from '../shared/Section/Header';

import man3 from './man3.png';

import styles from './Costs.module.css';

export default function Costs() {
  return (
    <div className={styles.container}>
      <SectionHeader title="Estimate Costs" color="orange" />
      <img src={man3} className={styles.man3} />
      <div className={styles.cc} />
    </div>
  );
}
