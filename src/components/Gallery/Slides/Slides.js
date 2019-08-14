import { h } from 'preact';

import { Slide, Title, Text, Action } from './Slide';

function First({ active }) {
  return (
    <Slide img="https://expand.org/images/image-annotation.png" active={active}>
      <Title>AI Solutions</Title>
      <Text>
        Expand has interfaces for text, image, video, and audio anotation. Our
        workers have labeled logos in images, determined what camera pose (slow
        motion, panning, zoom) is used in videos, and have identified various
        martial arts moves in videos. <br />
        <br />
        Here is an overview of what a typical task may cost:
        <br />
        Logo identification: $0.085 / image
        <br />
        Video camera classification: $0.10 / video
        <br />
        Martial arts classicifaction: $0.19 / video
        <br />
        <br />
        To ensure quality of the results, workers with high accuracy verified
        the results of new workers. Workers also had to pass quizzes before they
        could start the tasks.
      </Text>
    </Slide>
  );
}

function Second({ active }) {
  return (
    <Slide img="https://expand.org/images/the-q-2.jpg" active={active}>
      <Title>Business Process Outsourcing</Title>
      <Text>
        The Q Trivia is a live trivia game show you can play on your phone.
        Expand workers helped their team's effort by creating almost 10,000
        trivia questions. Each trivia question costed ~$0.06 to create.
        <br />
        <br />
        Expand can help automate other business processes you have. Need to make phone calls? Need to do quality checks? Expand is there to help.
      </Text>
    </Slide>
  );
}

function Third({ active }) {
  return (
    <Slide img="https://expand.org/images/survey.jpeg" active={active}>
      <Title>Surveys</Title>
      <Text>
        Need feedback? Expand workers can help.<br />
        <br />
        Through our quiz system you can ensure workers thouroughly understand your idea, song, etc. before giving feedback on it.
      </Text>
      <Action href="https://requester.expand.org/signup">Sign up</Action>
    </Slide>
  );
}

function Fourth({ active }) {
  return (
    <Slide img="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" active={active}>
      <Title>Data Collection</Title>
      <Text>
        Expand workers can do the hard work for you. So far, workers have
        verified information through Google, deduplicated results, and built out
        datasets.
        <br />
        <br />
        Workers earned between $0.10 and $0.17 / task for collecting data from Google searches.
        <br />
        <br />
        Workers have done almost 90,000 tasks regarding data collection.
        <br />
        <br />
        This has been made possible through our events system. When one task finishes, events spawned new related tasks for workers to complete.
      </Text>
    </Slide>
  );
}

function Fifth({ active }) {
  return (
    <Slide img="https://expand.org/images/content-curation.jpg" active={active}>
      <Title>Content Moderation</Title>
      <Text>
        Expand had 35,000 applications it needed to rank. We went to our own
        platform and set some rules on what would be verified.
        <br />
        <br />
        In less then 12 hours the content was moderated thanks to our loving community.
        <br />
        <br />
        Our API enables easily sending new content and receiving the labels for
        fast turn around.
      </Text>
    </Slide>
  );
}

export const tabs = [
  {
    id: 0,
    tabImg: 'https://expand.org/images/ai-1x1.jpg',
    title: ' Label Image, Videos, etc.',
    text: 'Companies use Expand to annotate their existing data sets to train AI.',
    Content: First,
  },
  {
    id: 1,
    tabImg: 'https://expand.org/images/the-q.jpg',
    title: 'Business Process Outsourcing',
    text: 'The Q Trivia uses Expand to generate trivia questions for their live trivia game show.',
    Content: Second,
  },
  {
    id: 2,
    tabImg: 'https://expand.org/images/lightbulb-1x1.jpg',
    title: 'Market Research',
    text: 'Interested in what our workers think about your product, idea, or ad? Test it out first',
    Content: Third,
  },
  {
    id: 3,
    tabImg: 'https://expand.org/images/google-g.png',
    title: 'Data Collection',
    text: 'Researchers use Expand workers to collect data from popular search engines.',
    Content: Fourth,
  },
  {
    id: 4,
    tabImg: 'https://expand.org/images/content-moderation.jpg',
    title: 'Content Moderation',
    text: 'Moderate content in real time through our API',
    Content: Fifth,
  },
];
