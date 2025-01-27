import { h } from 'preact';

import SectionHeader from '../shared/Section/Header';
import Feature from './Feature';

import man1 from './man1.png';

import styles from './Features.module.css';

export default function Features() {
  return (
    <div className={styles.container}>
      <SectionHeader title="Features you might like..." color="cyan" />
      <img src={man1} className={styles.man1} />
      <div className={styles.cc}>
        <div className={styles.content}>
          <div className={styles.features}>
            <Feature
              img={'/assets/feature1.png'}
              title="Best Possible Price"
              text="We don’t take any fee from the workers or requesters. Know workers get 100% of what you are paying out"
            />
            <Feature
              img={'/assets/feature2.png'}
              title="Quality Results"
              text="We build quality management into all our solutions, through test questions, verification systems, and more. This gives you both the best price, and highest quality results."
            />
            <Feature
              img={'/assets/feature3.png'}
              title="Flexibility"
              text="If there is something you want to change, edit, or customize we are here to help.  Our team consists of industry experts who have worked in various areas of AI. We are eager to find out what you need to succeed."
            />
            <Feature
              img={'/assets/feature4.png'}
              title="Rapid Task Building"
              text="We believe the product speaks for itself with our easy to use, drag and drop interface. No need to talk to a sales person to make your job."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
