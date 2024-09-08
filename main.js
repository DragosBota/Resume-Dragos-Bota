import './style.css'
import Header from './components/Header/Header'
import Work from './components/Work/Work';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';

const create = () => {
  Header();
  Projects();
  Work();
  AboutMe();
  Footer();
  EventListeners();
};

const EventListeners = () => {
  const downloadCV = document.querySelector('#downloadBtn').addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/1LUxRO6yK7gPcnaAbGrPpHix9wVEZggQJ/view?usp=drive_link', '_blank');
  })
  
  const plantify = document.querySelector('#img1').addEventListener('click', () =>{
    window.open('https://proyecto1-jet-theta.vercel.app', '_blank');
  })
  
  const pinterest = document.querySelector('#img2').addEventListener('click', () =>{
    window.open('https://pinterest-clone-rosy-theta.vercel.app', '_blank');
  })
  
  const weatherAPI = document.querySelector('#img3').addEventListener('click', () =>{
    window.open('', '_blank');
  })

} 


create();