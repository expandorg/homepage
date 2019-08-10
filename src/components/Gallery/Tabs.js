import { h } from 'preact';

import Tab from './Tab';

import styles from './Tabs.module.css';

export default function Tabs({ selected, onChange, tabs }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {tabs.map(tab => (
          <div className={styles.tab}>
            <Tab
              key={tab.id}
              tab={tab}
              active={selected === tab.id}
              onSelect={onChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
