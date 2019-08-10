/* eslint-disable react/jsx-no-bind */
import { h } from 'preact';
import cn from 'classnames';

import styles from './Tab.module.css';

export default function Tab({ tab, onChange, active }) {
  return (
    <div
      className={cn(styles.container, { [styles.active]: active })}
      onClick={() => onChange(tab.id)}
    >
      <img src={tab.tabImg} alt={tab.title} className={styles.img} />
      <div className={styles.title}>{tab.title}</div>
      <div className={styles.text}>{tab.text}</div>
    </div>
  );
}
