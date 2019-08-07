import { h } from 'preact';

import Page from './shared/Page';
import Navbar from './shared/Navbar';
import Hero from './Hero/Hero';

import Gallery from './Gallery/Gallery';

export default function App() {
	return (
		<Page>
			<Navbar />
			<Hero />
			<Gallery />
		</Page>
	);
}
