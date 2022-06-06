import React from 'react';
import { Container, Primary, Secundary } from './styles';

export function ButtonPrimary({children, onClick}) {

  return(
      <Container>
          <Primary
            onClick={onClick}
          >{children}</Primary>
      </Container>
  );
}

export function ButtonSecundary({children, onClick}){
  return(
    <Container>
        <Secundary
          onClick={onClick}
        >{children}</Secundary>
    </Container>
  );
}