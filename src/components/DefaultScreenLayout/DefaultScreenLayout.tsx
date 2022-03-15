import * as React from 'react';

interface DefaultScreenLayoutProps {
  title: string;
}

import {Container, Title} from './style';

const DefaultScreenLayout: React.FC<DefaultScreenLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default DefaultScreenLayout;
