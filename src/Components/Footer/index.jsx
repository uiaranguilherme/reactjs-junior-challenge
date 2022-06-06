import React from 'react';
import { Container, PhoneIcon, EmailIcon, FaceIcon, InstaIcon } from './styles';

function Footer() {
  return(
      <Container>
          <div>
              <h3>Contato: </h3>
              <li>
                  <PhoneIcon/> (xx) 99999-9999
              </li>
              <li>
                  <EmailIcon/> algum_email@email.com
              </li>
          </div>
          <div>
              <h3>Redes Sociais: </h3>
              <li>
                  <FaceIcon/> facebook.com/social_media
              </li>
              <li>
                  <InstaIcon/> @social_media
              </li>
          </div>
      </Container>
  );
}

export default Footer;