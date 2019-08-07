import { Component } from 'preact';

import styles from './Gallery.module.css';

export default class Gallery extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: 0
		};
	}

	render(_, state) {
		return (
			<div className={styles.container}>
				<div className={styles.header}>
          Here’s some inspiration
				</div>
			</div>
		);
	}
}
