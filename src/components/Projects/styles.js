import styled from 'styled-components';

export const Container = styled.div`
  background: #d7d7d9;
  display: flex;
  flex-direction: column;
    
`;

export const Title = styled.h1`
  margin-left: 120px;
  font-size: 36px;
  font-family: 'Josefin Sans', sans-serif;
`;

export const SubTitle = styled.p`
  margin-left: 120px;
  line-height: 28px;
  font-size: 18px;
  margin-top: 20px;
  opacity: 0.7;
  font-family: 'Fira Mono', monospace;
  @import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap');
`;

export const Pixel = styled.section`
display: flex;
height: 172px;
/* padding: 1px; */
box-shadow: 0 0 1em #606060;
width: 80%;
margin-top: 70px;
margin-left: 120px;
margin-bottom: 20px;

.items {
  font-size: 18px;
  font-family: 'Fira Mono', monospace;
  color: #1a1a1a;
  opacity: 0.8;
  line-height: 28px;
  @import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap');
}

.ferramentas {
  display: flex;
}

.box {
  background: #14ddca;
  margin-top: 10px;
  margin-left: 16px;
  padding: 2px;
  font-weight: 600;
  border-radius: 20px;
  text-align: center;
  width: 80px;
  border: none;
}

.container-about {
  margin-left: 16px;
  margin-top: -6px;
  width: 90%;
}

.about-project {
  font-size: 16px;
  font-family: 'Fira Mono', monospace;
  color: #1a1a1a;
  font-weight: 100;
  opacity: 0.7;
  line-height: 24px;
  @import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap');
}

.js {
  width: 140px;
}

.css {
  width: 65px;
}
`;

export const ProjectIcon = styled.div`
  border-radius: 4px;
  border-right: 6px solid #606060;
  display: flex;
  align-items: center;
  width: 270px;
  justify-content: center;
`;

export const TitleProject = styled.h1`
  padding: 16px;
  color: #1a1a1a;
  opacity: 0.8;
  text-decoration: none;
  font-size: 36px;
  font-family: 'Josefin Sans', sans-serif;
`;

export const DigitalWallet = styled.section`
  display: flex;
  height: 180px;
  /* padding: 1px; */
  box-shadow: 0 0 1em #606060;
  width: 80%;
  margin-top: 30px;
  margin-left: 120px;
  margin-bottom: 20px;

  .Container {
    width: 205px;
  }

  .container-about {
    margin-left: 16px;
    margin-top: -6px;
    width: 100%;
  }

  .about-project {
    margin-top: 10px;
    font-size: 16px;
    font-family: 'Fira Mono', monospace;
    color: #1a1a1a;
    font-weight: 100;
    opacity: 0.7;
    line-height: 24px;
    @import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap');
  }


  .ferramentas {
    display: flex;
  }

  .text {
    margin-top: -5px;
    width: 100%;
  }

  .trivia {
    width: 205px;
  }

  .tester {
    margin-top: -16px;
  }

  .text {
    padding-left: 16px;
    width: 825px;
  }

  .box {
    background: #6ede8a;
    margin-top: 30px;
    margin-left: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    font-weight: 600;
    border-radius: 20px;
    text-align: center;
    width: 100px;
    border: none;
    height: 35px;
  }

  .items {
  font-size: 18px;
  font-family: 'Fira Mono', monospace;
  color: #1a1a1a;
  opacity: 0.8;
  line-height: 28px;
  @import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap');
}

  .react {
    width: 90px;
  }

  .context {
    width: 152px;
  }

  .styled {
    width: 220px;
  }
`;
