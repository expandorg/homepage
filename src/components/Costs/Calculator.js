import { h, Component } from 'preact';

import styles from './Calculator.module.css';

function cost(mins, tasks) {
  if (Number.isNaN(mins) || Number.isNaN(tasks)) {
    return 0;
  }

  return (((mins * tasks) / 60) * 6).toFixed(2);
}

export default class Calculator extends Component {
  state = {
    mins: '',
    tasks: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render(props, { mins, tasks }) {
    return (
      <div>
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
                    fill="#2068BC"
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
          <div className={styles.result}>
            Price Estimate {cost(+mins, +tasks)} USD*
          </div>
        </div>
        <div className={styles.est}>
          Estimated Cost with our Competitors, for the same job:{' '}
          {(cost(+mins, +tasks) * 1.25).toFixed(2)} -{' '}
          {(cost(+mins, +tasks) * 3.2).toFixed(2)} USD.
        </div>
      </div>
    );
  }
}
