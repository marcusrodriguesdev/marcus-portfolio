import React from 'react';

import { Container, Title, Tools } from './styles';

function Skills() {
  return (
    <Container id="skills">
      <Title>skills</Title>
      <Tools>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="80px"/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="80"/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="80"/> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="80"/> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg" alt="Bootstrap" width="80"/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" width="80"/> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="80"/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-line.svg" alt="nextjs" width="80"/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg" alt="github" width="80"/>
      </Tools>
    </Container>
    );
}

export default Skills;