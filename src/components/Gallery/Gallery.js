import { Component } from 'preact';

import SectionHeader from '../shared/Section/Header';
import Tabs from './Tabs';
import { Container } from './Slides/Slide';
import { tabs } from './Slides/Slides';

import styles from './Gallery.module.css';

export default class Gallery extends Component {
  state = {
    selected: 0,
  };

  handleChange = selected => {
    this.setState({ selected });
  };

  render(_, { selected }) {
    return (
      <div className={styles.container}>
        <SectionHeader title="Here’s some inspiration" color="white" />
        <div className={styles.cc}>
          <div className={styles.content}>
            <Tabs
              tabs={tabs}
              onChange={this.handleChange}
              selected={selected}
            />
            <Container>
              {tabs.map(({ Content, id }) => (
                <Content key={id} active={selected === id} />
              ))}
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
