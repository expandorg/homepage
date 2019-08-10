/* eslint-disable react/jsx-no-bind */
import { h, Component } from 'preact';
import cn from 'classnames';

import styles from './Tab.module.css';

export default class Tab extends Component {
  state = { selected: false };

  handleSelect = () => {
    const { tab, onSelect } = this.props;
    const { selected } = this.state;

    onSelect(tab.id);
    this.setState({ selected: !selected });
  };

  render({ tab, active }, { selected }) {
    return (
      <div
        className={cn(styles.container, { [styles.active]: active })}
        onClick={this.handleSelect}
      >
        <img src={tab.tabImg} alt={tab.title} className={styles.img} />
        <div className={styles.title}>{tab.title}</div>
        <div className={styles.text}>{tab.text}</div>
        {selected && (
          <div className={styles.content}>
            <tab.Content active />
          </div>
        )}
      </div>
    );
  }
}
