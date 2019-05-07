import React from "react";
// import Restaurantimage from './Restaurant.jpg';



export function CategoryOptionsPanel(props) {
    return (
        //  subcard 
        <div className="card category" style={{width: "7rem", height: "7rem"}}>
         {/* image  */}
        <img src={props.image} className="card-img-top" alt="RestauurantImage"/>
        {/* text */}
        <figcaption>{props.text}</figcaption>
        {/* <div className="card-body">
          <p className="card-text">{props.text}</p>
        </div> */}
      </div>
    
    )
}
// export default CategoryOptions;