import { h } from 'preact';

import SectionHeader from '../shared/Section/Header';
import ActionLink from '../shared/ActionLink';
import { Content, Left, Right } from '../shared/Layout';

import man2 from './man2.png';

import styles from './Cases.module.css';

export default function Cases() {
  return (
    <div className={styles.container}>
      <SectionHeader title="What do we do?" color="yellow" />
      <img src={man2} className={styles.man2} />
      <div className={styles.cc}>
        <Content>
          <Left>
            <div className={styles.text}>
              Do you need to train AI? Are you doing research requiring
              collection or of data? Do you have a business procedure that
              needs outsourcing?
              <br />
              <br />
              Expand allows you to build your tasks according to your needs.
              And our worker base completes these tasks with reliability and
              timeliness.
            </div>
            <ActionLink
              className={styles.signup}
              href="https://requester.expand.org/signup"
            >
              Sign up
            </ActionLink>
          </Left>
          <Right>
            <img
              className={styles.img}
              src="/assets/case1.png"
              alt="What do we do?"
            />
          </Right>
        </Content>
      </div>
    </div>
  );
}
