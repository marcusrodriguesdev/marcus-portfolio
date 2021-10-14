import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <div>
      <a
            href="https://github.com/marcusrodriguesdev"
            target="_blank"
            rel="noreferrer"
            >
            <FaGithub size={30} className="icon github" />
          </a>
          <a
            href="https://twitter.com/m4rcusrodrigues"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={30} className="icon twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/marcusrodriguesdev/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} className="icon linkedin" />
          </a>
      </div>
    </Container>
  );
}

export default Footer;