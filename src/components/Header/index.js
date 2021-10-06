import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

import { Container, Navigation, ContainerHeader } from './styles';

function Header() {
  return (
    <Container>
      <Navigation>
        <div>
          <a
            href="https://github.com/marcusrodriguesdev"
            target="_blank"
            rel="noreferrer"
            >
            <FaGithub size={24} className="icon github" />
          </a>
          <a
            href="https://twitter.com/m4rcusrodrigues"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={24} className="icon twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/marcusrodriguesdev/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={24} className="icon linkedin" />
          </a>
        </div>
        <div>
          <a className="nav" href="#about">About</a>
          <a className="nav" href="#projects">Projects</a>
          <a className="nav" href="#skills">Skills</a>
        </div>
      </Navigation>
      <ContainerHeader>
        <h1>Marcus Rodrigues</h1>
        <h2>Front-End Developer</h2>
      </ContainerHeader>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#606060" fill-opacity="1" d="M0,160L34.3,154.7C68.6,149,137,139,206,117.3C274.3,96,343,64,411,85.3C480,107,549,181,617,208C685.7,235,754,213,823,181.3C891.4,149,960,107,1029,112C1097.1,117,1166,171,1234,181.3C1302.9,192,1371,160,1406,144L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
    </Container>
  );
}

export default Header;