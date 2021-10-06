import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: #A2D9FF;
`;

export const Navigation = styled.nav`
  background-color: #606060;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;

  .icon {
    color: white;
    margin: 8px;
    cursor: pointer;
  }

  .github:hover {
    color: #1a1a1a;
  }

  .twitter:hover {
    color: #1DA1F2;
  }

  .linkedin:hover {
    color: #0e76a8;
  }

  .nav {
    opacity: 0.8;
    color: white;
    text-decoration: none;
    margin: 20px;
    font-size: 18px;
  }

  .nav:hover {
    opacity: 1;
  }
`;

export const ContainerHeader = styled.header`
  background-color: #606060;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  color: white;

  h1 {
    margin-top: 100px;
    font-size: 45px;
    animation: animate 2s ease-in-out forwards;
  }

  h2 {
    color: #A2D9FF;
    /* font-size: 20px; */
    animation: heading3 2s ease-in-out forwards;
  }

  @keyframes animate {
    0% {
      transform: translateY(-800px);
      color: #A2D9FF;
    }

    60% {
      transform: translateY(0);
    }

    80% {
      transform: translateY(-100px);
    }

    100% {
      transform: translateY(0);
      color: white;
    }
  }

  @keyframes heading3 {
    0% {
      transform: translateY(-800px);
      color: white;
    }

    60% {
      transform: translateY(0);
    }

    80% {
      transform: translateY(-100px);
    }

    100% {
      transform: translateY(0);
      color: #A2D9FF;
    }
  }
`;
