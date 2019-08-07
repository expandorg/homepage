import { Component } from 'preact';

import Line from '../shared/Line';
import Tabs from './Tabs';
import Content from './Content';

import styles from './Gallery.module.css';

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
    };
  }

  handleChange = selected => {
    this.setState({ selected });
  };

  render(_, { selected }) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Here’s some inspiration</div>
          <Line />
        </div>
        <div className={styles.cc}>
          <div className={styles.content}>
            <Tabs onChange={this.handleChange} active={selected} />
            <Content onChange={this.handleChange} active={selected} />
          </div>
        </div>
      </div>
    );
  }
}
