import { Body, Header, Left, Right, Title } from 'native-base';
import React from 'react';

export const NewsAppHeader = () => {
  return (
    <Header>
      <Left />
      <Body>
        <Title>Header</Title>
      </Body>
      <Right />
    </Header>
  );
};
