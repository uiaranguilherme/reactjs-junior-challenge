import React from 'react';

import { Container } from './styles';

function Input({value, label, onChange, width = 'auto'}) {
    

  return(
      <Container width={width}>
        <input id={label} value={value} placeholder='texto' onChange={onChange}/>
        <label for={label}>{label}</label>
      </Container>
  );
}

export default Input;