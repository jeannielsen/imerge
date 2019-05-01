import React from "react";
import  "./style.css";

function TranslateFrame(props) {
    return (
        
        <iframe src={props.translateSrc}></iframe>
    );
}

export default TranslateFrame;