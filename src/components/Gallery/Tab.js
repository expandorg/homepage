/* eslint-disable react/jsx-no-bind */
import { h } from 'preact';
import cn from 'classnames';

import styles from './Tab.module.css';

export default function Tab({ active, onChange, item }) {
  return (
    <div
      className={cn(styles.container, { [styles.active]: active === item.id })}
      onClick={() => onChange(item.id)}
    >
      <img
        src={`./assets/tabs/${item.id}.png`}
        alt={item.title}
        className={styles.img}
      />
      <div className={styles.title}>{item.title}</div>
      <div className={styles.text}>{item.text}</div>
    </div>
  );
}
