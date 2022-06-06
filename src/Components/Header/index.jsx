import React from 'react';
import logoImg from './../../Assets/Logo.jpg';

import { Container, Logo, UserArea, CircleUser} from './styles';

function Header() {
  return(
      <Container>
          <Logo>
            <img src={logoImg} alt="Logo My Task" />
          </Logo>
          <UserArea>
            <CircleUser>
              <p>UC</p>
            </CircleUser>
          </UserArea>
      </Container>
  );
}

export default Header;