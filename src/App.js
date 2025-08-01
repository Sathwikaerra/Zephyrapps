
import './App.css';
import styled,{ ThemeProvider } from "styled-components";
import {darkTheme, lightTheme} from "./utils/themes";
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Projects from './components/projects';
import Contact1 from './components/contact';
import { useEffect } from 'react';
import Footer from "./components/footer"


const Body=styled.div`
background-color:${({ theme })=>theme.bg};
width:100%;
height:100%;
/* overflow-x:hidden; */
`;//creating  tags containers  with styled components

const Wrapper=styled.div`
padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;



function App() {
  useEffect(()=>{
    document.title="ZephyrApps"
  })
  return (

    <ThemeProvider theme={lightTheme}>
      <Router>
           <Navbar/>
         <Body>
             <Hero/>
            <Skills/>
              <Projects/>
              {/* <Education/> */}
              <Contact1/>
        
          </Body>


      </Router>
        
      </ThemeProvider>
  );
}

export default App;
