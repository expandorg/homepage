import { h } from 'preact';
import cn from 'classnames';

import styles from './ActionLink.module.css';

export default function ActionLink({ className, children, href }) {
  return (
    <a className={cn(styles.action, className)} href={href}>
      {children}
    </a>
  );
}
