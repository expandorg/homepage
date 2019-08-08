import { h } from 'preact';
import cn from 'classnames';

import styles from './BackNext.module.css';

export default function BackNext({ onChange, active }) {
  return (
    <div className={styles.container}>
      <button
        className={cn(styles.button, styles.buttonLeft, {
          [styles.disabled]: active === 0,
        })}
        disabled={active === 0}
        onClick={() => onChange(active - 1)}
      >
        <svg width="24" height="25" viewBox="0 0 24 25">
          <path
            d="M9.5 17.4691L14.5 12.3311L9.5 7.19312V17.4691Z"
            fill="#2068BC"
          />
        </svg>
      </button>
      <button
        disabled={active === 4}
        className={cn(styles.button, styles.buttonRight, {
          [styles.disabled]: active === 4,
        })}
        onClick={() => onChange(active + 1)}
      >
        <svg width="24" height="25" viewBox="0 0 24 25">
          <path
            d="M9.5 17.4691L14.5 12.3311L9.5 7.19312V17.4691Z"
            fill="#2068BC"
          />
        </svg>
      </button>
    </div>
  );
}
