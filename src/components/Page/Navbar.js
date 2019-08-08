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
          <a className={styles.worker} href="https://expand.org">
            interested in being a worker?
          </a>
          <a className={styles.login} href="https://expand.org">
            log in
          </a>
        </div>
      </div>
    </div>
  );
}
