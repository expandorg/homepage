import { h } from 'preact';
import cn from 'classnames';

import styles from './Slide.module.css';

export function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export function BackNext({ children }) {
  return <div className={styles.backnext} />;
}

export function Title({ children }) {
  return <div className={styles.title}>{children}</div>;
}

export function Text({ children }) {
  return <div className={styles.text}>{children}</div>;
}

export function Action({ children, href }) {
  return (
    <a className={styles.action} href={href}>
      {children}
    </a>
  );
}

export function Slide({ children, src, onChange, active, id }) {
  const visible = active === id;
  return (
    <div className={cn(styles.content, { [styles.visible]: visible })}>
      <div className={styles.left}>
        <img src={src} className={styles.img} />
      </div>
      <div className={styles.right}>
        <div className={styles.rc}>{children}</div>
      </div>
    </div>
  );
}
