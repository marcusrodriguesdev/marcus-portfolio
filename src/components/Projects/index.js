import React from 'react';
import { GiWallet, GiPalette } from 'react-icons/gi';
import {
  Container, Title, SubTitle, Pixel, DigitalWallet, ProjectIcon, TitleProject,
} from './styles';

function Projects() {
  return (
    <Container>
      <div>
        <Title id="projects">
          projects
        </Title>
      </div>
      <div>
        <SubTitle>personal projects and projects proposed  by trybe</SubTitle>
      </div>
        <Pixel>
          <ProjectIcon>
            <a
              href="https://github.com/marcusrodriguesdev/Pixel-Art"
              target="_blank"
              rel="noreferrer"
            >
              <GiPalette
                color="#14ddca"
                size={ 80 }
              />
              {/* <img
                src={ FotoPixel }
                width="350px"
                alt="Projeto Pixel Art"
              /> */}
            </a>
          </ProjectIcon>
          <div>
            <TitleProject>pixel art</TitleProject>
            <div className="container-about">
              <p className="about-project">it consists of being a web 
              page that contains a palette of functional cores that 
              can be used to create pixel drawings.
              </p>
            </div>
            <div className="ferramentas">
              <div className="box">
                <p className="items">html</p>
              </div> 
              <div className="box js">
                <p className="items">javascript</p>
              </div> 
              <div className="box css">
                <p className="items">css</p>
              </div> 
            </div>
          </div>
        </Pixel>
        <DigitalWallet>
          <ProjectIcon className="Container">
            <a
              href="https://github.com/marcusrodriguesdev/digital-wallet"
              target="_blank"
              rel="noreferrer"
            >
              <GiWallet
                size={ 80 }
                color="#6ede8a"
              />
            </a>
          </ProjectIcon>
          <div>
            <TitleProject>digital wallet</TitleProject>
            <div className="container-about">
              <p className="about-project">
                ✅ Designed to be a 
                currency converter spending wallet
              </p>
            </div>
            <div className="ferramentas">
              <div className="box react">
                <p className="items">React</p>
              </div> 
              <div className="box context">
                <p className="items">Context Api</p>
              </div> 
              <div className="box styled">
                <p className="items">Styled-Components</p>
              </div> 
            </div>
          </div>
        </DigitalWallet>
    </Container>
  );
}

export default Projects;