import React, { Component } from "react";
import TranslateFrame from '../components/translate-frame';

function Translator(props) {

  // return statement
  return (

    <div>
      <h2>Translator Page</h2>

      <TranslateFrame translateSrc="https://translate.google.com/"></TranslateFrame>

    </div>
  );
}

export default Translator;