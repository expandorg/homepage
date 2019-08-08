import { h } from 'preact';

import SectionHeader from '../shared/Section/Header';
import styles from './Costs.module.css';

export default function Costs() {
  return (
    <div className={styles.container}>
      <SectionHeader title="Estimate Costs" color="orange" />
    </div>
  );
}
