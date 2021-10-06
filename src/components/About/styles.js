import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background: #a2d9ff;
  color: #1a1a1a;

  h1 {
    margin-left: 120px;
    font-size: 36px;
    font-family: 'Josefin Sans', sans-serif;
  }

  div {
    margin: 60px;
    margin-left: 200px;
  }

  p {
    @import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap');
    width: 50%;
    text-align: center;
    font-family: 'Fira Mono', monospace;
    font-size: 18px;
    font-weight: 100;
    line-height: 28px;
  }
`;
