import React from 'react';
import About from '../../components/About';
import Header from '../../components/Header';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import GlobalStyle from '../../styles/GlobalStyle';

// import { Container } from './styles';

function Marcus() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}

export default Marcus;