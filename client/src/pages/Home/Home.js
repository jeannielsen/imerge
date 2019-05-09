import React from "react";
import { useTranslation } from 'react-i18next';
import "./home.css";
import BackgroundImage1 from './flag-2.jpg';
import BackgroundImage2 from './kids-2.png';

function Home() {
  const { t } = useTranslation();
  return (
    
    <div>
      <h1>{t('Home Page')}</h1>
      <div className="back">
      <img  className= "background1" src= {BackgroundImage1} alt="not found"/>
      {/* <img  className= "background" src= {BackgroundImage1} alt="not found"/> */}
      </div>
      {/* <div className="back"> */}
      {/* <img  className= "background2" src= {BackgroundImage2} alt="not found"/> */}
      {/* <img  className= "background" src= {BackgroundImage1} alt="not found"/> */}
      {/* </div> */}
    </div>
  )
}

export default Home;   