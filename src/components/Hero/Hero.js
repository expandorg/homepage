import { h } from 'preact';

import ActionLink from '../shared/ActionLink';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.inner}>
          <h1 className={styles.title}>
            A new and better
            <br />
            micro task
            <br />
            marketplace.
          </h1>
          <h3 className={styles.subtitle}>
            Easy to Get Started. High-Quality Workers.
            <br />
            Ethical Pricing for Workers & Requesters.
            <br />
            Built in Quality Management.
          </h3>
          <ActionLink
            className={styles.signup}
            href="https://requester.expand.org/signup"
          >
            Sign up
          </ActionLink>
          <div className={styles.secondary}>
            <a
              className={styles.worker}
              href="https://portal.expand.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Are you a worker?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
