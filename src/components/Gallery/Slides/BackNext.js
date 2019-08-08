import { h } from 'preact';
import cn from 'classnames';

import styles from './BackNext.module.css';

export default function BackNext({ onChange, active }) {
  return (
    <div className={styles.container}>
      <button
        className={cn(styles.button, { [styles.disabled]: active === 0 })}
        disabled={active === 0}
        onClick={() => onChange(active - 1)}
      >
        left
      </button>
      <button
        disabled={active === 4}
        className={cn(styles.button, styles.buttonRight, {
          [styles.disabled]: active === 4,
        })}
        onClick={() => onChange(active + 1)}
      >
        right
      </button>
    </div>
  );
}
