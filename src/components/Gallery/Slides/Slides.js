import { h } from 'preact';

import { Slide, Title, Text, Action } from './Slide';

export function First({ active, onChange }) {
  return (
    <Slide src="assets/content/0.png" id={0} active={active}>
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
    <Slide src="assets/content/0.png" id={1} active={active}>
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
