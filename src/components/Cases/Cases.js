import { h } from 'preact';

import SectionHeader from '../shared/Section/Header';
import ActionLink from '../shared/ActionLink';

import man2 from './man2.png';

import styles from './Cases.module.css';

export default function Cases() {
  return (
    <div className={styles.container}>
      <SectionHeader title="What do we do?" color="yellow" />
      <img src={man2} className={styles.man2} />
      <div className={styles.cc}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.text}>
              Do you need to train AI? Are you doing research requiring
              collection or of data? Do you have a business proceedure that
              needs outsourcing?
              <br />
              <br />
              Our product and its features allow you to build your tasks
              accoriding to your needs. And our workerbase completes these tasks
              with realability and timeliness.
            </div>
            <ActionLink
              className={styles.signup}
              href="https://requester.expand.org/signup"
            >
              Sign up
            </ActionLink>
          </div>
          <div className={styles.right}>
            <img
              className={styles.img}
              src="/assets/case1.png"
              alt="What do we do?"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
