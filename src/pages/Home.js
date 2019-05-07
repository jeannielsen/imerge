import React from "react";
import { useTranslation } from 'react-i18next';


  function Home() {
    const { t } = useTranslation();
    return (
    
      <React.Fragment>
       {/* <h2 id="output">Home Page</h2> */}
      <h1>{t('Home Page')}</h1>

      
    </React.Fragment>
     
      
   
    )
  }
  
  export default Home;   