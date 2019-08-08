import { h } from 'preact';

import SectionHeader from '../shared/Section/Header';
import Feature from './Feature';

import styles from './Features.module.css';

export default function Features() {
  return (
    <div className={styles.container}>
      <SectionHeader title="Features you might like..." color="cyan" />
      <div className={styles.cc}>
        <div className={styles.content}>
          <div className={styles.features}>
            <Feature
              img={'/assets/feature1.svg'}
              title="Best Possivle Price"
              text="We don’t take any fee for the work on the platform. Know the workers get 100% of what you are paying out"
            />
            <Feature
              img={'/assets/feature2.svg'}
              title="Quality Results"
              text="We build quality management into all our solutions, through test questions, verification systems, and more. This gives you both the best price, and highest quality results."
            />
            <Feature
              img={'/assets/feature3.svg'}
              title="Flexibility"
              text="If there is something you want to change, edit, or customize we are here to help.  Our team consists of industry experts who have worked in various areas of AI. We are eager to find out what you need to succeed."
            />
            <Feature
              img={'/assets/feature4.svg'}
              title="Get Started Today"
              text="We believe the product speaks for itself. No need to talk to a sales person to make your job."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
