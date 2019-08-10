import { h } from 'preact';

import { Slide, Title, Text, Action } from './Slide';

function First({ active }) {
  return (
    <Slide img="/assets/gallery/slide0.png" active={active}>
      <Title>Data Processing</Title>
      <Text>
        About this customers’s use case to help the potential customer
        understand that the platfrom delivers for their Job needs. <br />
        <br />
        Show the cost breakdown for this example:
        <br />
        <br />
        Number of Tasks
        <br />
        Pay per worker
        <br />
        Something related to result
      </Text>
      <Action href="https://requester.expand.org/signup">Sign up</Action>
    </Slide>
  );
}

function Second({ active }) {
  return (
    <Slide img="/assets/gallery/slide0.png" active={active}>
      <Title>Get Sign Ups</Title>
      <Text>
        About this customers’s use case to help the potential customer
        understand that the platfrom delivers for their Job needs. <br />
        <br />
        Show the cost breakdown for this example:
        <br />
        <br />
        Number of Tasks
        <br />
        Pay per worker
        <br />
        Something related to result
      </Text>
    </Slide>
  );
}
function Third({ active }) {
  return (
    <Slide img="/assets/gallery/slide0.png" active={active}>
      <Title>Label Image video</Title>
      <Text>
        About this customers’s use case to help the potential customer
        understand that the platfrom delivers for their Job needs. <br />
        <br />
        Show the cost breakdown for this example:
        <br />
        <br />
        Number of Tasks
        <br />
        Pay per worker
        <br />
        Something related to result
      </Text>
    </Slide>
  );
}

function Fourth({ active }) {
  return (
    <Slide img="/assets/gallery/slide0.png" active={active}>
      <Title>Data Collection</Title>
      <Text>
        About this customers’s use case to help the potential customer
        understand that the platfrom delivers for their Job needs. <br />
        <br />
        Show the cost breakdown for this example:
        <br />
        <br />
        Number of Tasks
        <br />
        Pay per worker
        <br />
        Something related to result
      </Text>
    </Slide>
  );
}

function Fifth({ active }) {
  return (
    <Slide img="/assets/gallery/slide0.png" active={active}>
      <Title>Content Curation</Title>
      <Text>
        About this customers’s use case to help the potential customer
        understand that the platfrom delivers for their Job needs. <br />
        <br />
        Show the cost breakdown for this example:
        <br />
        <br />
        Number of Tasks
        <br />
        Pay per worker
        <br />
        Something related to result
      </Text>
    </Slide>
  );
}

export const tabs = [
  {
    id: 0,
    tabImg: '/assets/gallery/tab0.png',
    title: 'Conduct Surveys',
    text: 'Description about case study goes here.',
    Content: First,
  },
  {
    id: 1,
    tabImg: '/assets/gallery/tab1.png',
    title: 'Get Sign Ups',
    text: 'Description about case study goes here.',
    Content: Second,
  },
  {
    id: 2,
    tabImg: '/assets/gallery/tab2.png',
    title: ' Label Image video',
    text: 'Description about case study goes here.',
    Content: Third,
  },
  {
    id: 3,
    tabImg: '/assets/gallery/tab3.png',
    title: 'Data Collection',
    text: 'Description about case study goes here.',
    Content: Fourth,
  },
  {
    id: 4,
    tabImg: '/assets/gallery/tab4.png',
    title: 'Content Curation',
    text: 'Description about case study goes here.',
    Content: Fifth,
  },
];
