import { h } from 'preact';

import SectionHeader from '../shared/Section/Header';
import { Content, Left, Right } from '../shared/Layout';
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
        <Content>
          <Left>
            <div className={styles.text}>
              Expand takes no fee. Everything you pay goes straight to the
              workforce. *You set your own budget and price per job which will
              vary on skill, speed, and quality needed. To help you decide what
              to pay, we have a small test calculator. In actuality, you will
              want to pay more or less depending on skill, quality, and speed
              needed.
              <br />
              <br />
            </div>
            <ActionLink
              className={styles.signup}
              href="https://requester.expand.org/signup"
            >
              Sign up
            </ActionLink>
          </Left>
          <Right className={styles.right}>
            <Calculator />
          </Right>
        </Content>
      </div>
    </div>
  );
}
