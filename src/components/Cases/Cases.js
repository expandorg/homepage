import { h } from 'preact';

import SectionHeader from '../shared/Section/Header';
import styles from './Cases.module.css';

export default function Cases() {
  return (
    <div className={styles.container}>
      <SectionHeader title="What do we do?" color="yellow" />
    </div>
  );
}
