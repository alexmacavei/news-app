import { Container, Content } from 'native-base';
import React, { Component } from 'react';
import { NewsAppHeader } from './src/components/NewsAppHeader';
import { NewsHolder } from './src/components/NewsHolder';

interface Props {}

export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <NewsAppHeader />
        <Content>
          <NewsHolder />
        </Content>
      </Container>
    );
  }
}
