import { h, Component } from 'preact';

import styles from './Calculator.module.css';

function cost(mins, tasks) {
  if (Number.isNaN(mins) || Number.isNaN(tasks)) {
    return 0;
  }

  return tasks * tasks;
}

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
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.wrap}>
            <input
              className={styles.input}
              value={mins}
              placeholder="Estimated minutes for the task"
              name="mins"
              onChange={this.handleChange}
            />
            <ins className={styles.ins}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  fill="white"
                />
              </svg>
            </ins>
          </div>
          <div className={styles.wrap}>
            <input
              className={styles.input}
              value={tasks}
              name="tasks"
              placeholder="Number of tasks"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className={styles.result}>XPN = {cost(+mins, +tasks)} USD </div>
      </div>
    );
  }
}
