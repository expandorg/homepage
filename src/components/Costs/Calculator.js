import { h, Component } from 'preact';

import styles from './Calculator.module.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mins: '',
      tasks: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render(props, { mins, tasks }) {
    const reslut = 0;

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <input
            className={styles.input}
            value={mins}
            placeholder="Estimated minutes for the task"
            name="mins"
            onChange={this.handleChange}
          />
          <input
            className={styles.input}
            value={tasks}
            name="tasks"
            placeholder="Number of tasks"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.result}>XPN = {reslut} USD </div>
      </div>
    );
  }
}
