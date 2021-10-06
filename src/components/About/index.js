import React from 'react';

import { Container } from './styles';

function About() {
  return (
    <Container>
      <h1 id="about">about</h1>
      <div>
        <p>I'm a hard working and motiveted apprentice. I like to challenge myself, set goals and then strive to accomplish them. Some of my qualities are that I learn quickly and I am a very proactive person. Even if I don’t have that much experience with a certain task, with a bit of guidance I’m able to accomplish it quickly and efficiently.</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d7d7d9" fill-opacity="1" d="M0,224L26.7,224C53.3,224,107,224,160,208C213.3,192,267,160,320,138.7C373.3,117,427,107,480,117.3C533.3,128,587,160,640,170.7C693.3,181,747,171,800,149.3C853.3,128,907,96,960,80C1013.3,64,1067,64,1120,74.7C1173.3,85,1227,107,1280,133.3C1333.3,160,1387,192,1413,208L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
    </Container>
  );
}

export default About;