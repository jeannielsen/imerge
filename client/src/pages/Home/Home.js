import React from "react";
import { useTranslation } from 'react-i18next';
import "./home.css";
import BackgroundImage from './immigrants.png';

function Home() {
  const { t } = useTranslation();
  return (
    
    <div>
      <h1>{t('Home Page')}</h1>
      <img  src= {BackgroundImage} alt="not found"/>
    </div>
  )
}

export default Home;   