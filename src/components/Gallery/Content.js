import { h } from 'preact';

import styles from './Content.module.css';


export default function Content(props) {
	switch (props.active) {
		case 0:
			return <Content0 {...props} />;
		default:
			return <Content0 {...props} />;

	}
}

function Content0({ active, onChange }) {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.left}>
					<img src={`./assets/content/${0}.png`}  className={styles.img} />
				</div>
				<div className={styles.right}>
					<div className={styles.rc}>
						<div className={styles.title}>
            Data Processing
						</div>
						<div className={styles.text}>
            About this customers’s use case to help the potential customer
            understand that the platfrom delivers for their Job needs. <br /><br />
            Show the cost breakdown for this example:<br /><br />
             Number of Tasks<br />
             Pay per worker<br />
             Something related to result
						</div>
						<a className={styles.signup} href="https://requester.expand.org/signup" >
              Sign up
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
