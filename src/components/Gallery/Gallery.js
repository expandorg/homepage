import { Component } from 'preact';

import SectionHeader from '../shared/Section/Header';
import Tabs from './Tabs';
import { Container } from './Slides/Slide';
import { First, Second, Third, Fourth, Fifth } from './Slides/Slides';

import styles from './Gallery.module.css';

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    };
  }

  handleChange = active => {
    this.setState({ active });
  };

  render(_, { active }) {
    return (
      <div className={styles.container}>
        <SectionHeader title="Here’s some inspiration" color="white" />
        <div className={styles.cc}>
          <div className={styles.content}>
            <Tabs onChange={this.handleChange} active={active} />
            <Container>
              <First onChange={this.handleChange} active={active} />
              <Second onChange={this.handleChange} active={active} />
              <Third onChange={this.handleChange} active={active} />
              <Fourth onChange={this.handleChange} active={active} />
              <Fifth onChange={this.handleChange} active={active} />
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
