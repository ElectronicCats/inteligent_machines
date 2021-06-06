import React from 'react';
import { string, element } from 'prop-types';

import { useToggle } from '../../hooks/useToggle';
import { ToogleContent, ContainerTitle, Container } from '../UI/Content';

export const DropContent = ({ title, color, children }) => {
  const [open, toggle] = useToggle();

  return (
    <article>
      <ContainerTitle
        align='left'
        color={color}
        size={2}
        onClick={toggle}
        style={{ cursor: 'pointer' }}
      >
        {title} {`(${open ? '-' : '+'})`}
      </ContainerTitle>
      <ToogleContent open={open}>
        <Container>{children}</Container>
      </ToogleContent>
    </article>
  );
};

DropContent.propTypes = {
  title: string.isRequired,
  color: string,
  children: element,
};
