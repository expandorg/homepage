import { h } from 'preact';

import Page from './shared/Page';
import Navbar from './shared/Navbar';
import Hero from './Hero/Hero';
import Gallery from './Gallery/Gallery';
import Features from './Features/Features';
import Cases from './Cases/Cases';
import Costs from './Costs/Costs';

export default function App() {
  return (
    <Page>
      <Navbar />
      <Hero />
      <Gallery />
      <Features />
      <Cases />
      <Costs />
    </Page>
  );
}
