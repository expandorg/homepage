import { h } from 'preact';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <a className={styles.logo} href="https://expand.org">
          Expand
        </a>
        <div className={styles.right}>
          <a
            className={styles.login}
            target="_blank"
            rel="noopener noreferrer"
            href="https://requester.expand.org"
          >
            Requester
          </a>
          <a
            className={styles.login}
            target="_blank"
            rel="noopener noreferrer"
            href="https://portal.expand.org"
          >
            Worker
          </a>
        </div>
      </div>
    </div>
  );
}
