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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#606060" fill-opacity="1" d="M0,96L26.7,101.3C53.3,107,107,117,160,144C213.3,171,267,213,320,213.3C373.3,213,427,171,480,160C533.3,149,587,171,640,170.7C693.3,171,747,149,800,133.3C853.3,117,907,107,960,112C1013.3,117,1067,139,1120,176C1173.3,213,1227,267,1280,261.3C1333.3,256,1387,192,1413,160L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
    </Container>
  );
}

export default Projects;