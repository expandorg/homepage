import { h } from 'preact';

import ActionLink from '../../shared/ActionLink';

import styles from './Slide.module.css';

export function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export function Title({ children }) {
  return <div className={styles.title}>{children}</div>;
}

export function Text({ children }) {
  return <div className={styles.text}>{children}</div>;
}

export function Action({ children, href }) {
  return (
    <ActionLink className={styles.action} href={href}>
      {children}
    </ActionLink>
  );
}

export function Slide({ children, active, img }) {
  if (!active) {
    return null;
  }
  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <img src={img} className={styles.img} />
      </div>
      <div className={styles.right}>
        <div className={styles.rc}>{children}</div>
      </div>
    </div>
  );
}
