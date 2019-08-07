import { h } from 'preact';

import Tab from './Tab';

import styles from './Tabs.module.css';

const array = [
  {
    id: 0,
    title: 'Conduct Surveys',
    text: 'Description about case study goes here.',
  },
  {
    id: 1,
    title: 'Get Sign Ups',
    text: 'Description about case study goes here.',
  },
  {
    id: 2,
    title: ' Label Image video',
    text: 'Description about case study goes here.',
  },
  {
    id: 3,
    title: 'Data Collection',
    text: 'Description about case study goes here.',
  },
  {
    id: 4,
    title: 'Content Curation',
    text: 'Description about case study goes here.',
  },
];

export default function Tabs({ active, onChange }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {array.map(item => (
          <div className={styles.tab}>
            <Tab
              key={item.id}
              item={item}
              active={active}
              onChange={onChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
