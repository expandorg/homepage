import { h } from 'preact';

import SectionHeader from '../shared/Section/Header';
import ActionLink from '../shared/ActionLink';
import Calculator from './Calculator';

import man3 from './man3.png';

import styles from './Costs.module.css';

export default function Costs() {
  return (
    <div className={styles.container}>
      <SectionHeader title="Estimate Costs" color="orange" />
      <img src={man3} className={styles.man3} />
      <div className={styles.cc}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.text}>
              If you have a job in mind, you can calculate your potential cost
              here. The range above is included becuase the budget should vary
              in accordance wiht the on the skill level required for your task.
              More highly skilled workers will require higher pay.
              <br />
              <br />
              <span className={styles.bold}>
                Estimated Cost with out Competitors, for the same task: $540 -
                $2,400.
              </span>
            </div>
            <ActionLink
              className={styles.signup}
              href="https://requester.expand.org/signup"
            >
              Sign up
            </ActionLink>
          </div>
          <div className={styles.right}>
            <Calculator />
          </div>
        </div>
      </div>
    </div>
  );
}
