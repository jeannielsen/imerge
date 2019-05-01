import React, { Component } from "react";
import Navbar from "../components/Navbar";
import TranslateFrame from '../components/translate-frame';


function Translator(props) {

  // return statement
  return (
    
    <div>
      <h2>Translator Page</h2>

      <TranslateFrame translateSrc="https://translate.google.com/"></TranslateFrame>

      {/* <TranslateFrame translateSrc="http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit/"></TranslateFrame> */}
      
      {/* <TranslateFrame translateSrc="http://translate.google.com/translate?hl=bg&ie=UTF-8&u=YOUR_IFRAME_URL&sl=de&tl=bg"></TranslateFrame> */}

    </div>
  );
}




export default Translator;