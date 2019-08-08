import { h } from 'preact';

import { Slide, Title, Text, Action } from './Slide';

export function First({ active, onChange }) {
  return (
    <Slide
      src="/assets/content/0.png"
      id={0}
      active={active}
      onChange={onChange}
    >
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

export function Second({ active, onChange }) {
  return (
    <Slide
      src="/assets/content/0.png"
      id={1}
      active={active}
      onChange={onChange}
    >
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
export function Third({ active, onChange }) {
  return (
    <Slide
      src="/assets/content/0.png"
      id={2}
      active={active}
      onChange={onChange}
    >
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
export function Fourth({ active, onChange }) {
  return (
    <Slide
      src="/assets/content/0.png"
      id={3}
      active={active}
      onChange={onChange}
    >
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
export function Fifth({ active, onChange }) {
  return (
    <Slide
      src="/assets/content/0.png"
      id={4}
      active={active}
      onChange={onChange}
    >
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
