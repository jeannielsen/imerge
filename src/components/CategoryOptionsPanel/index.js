import React from "react";
// import Restaurantimage from './Restaurant.jpg';



export function CategoryOptionsPanel(props) {
    return (
        //  subcard 
        <div className="card" style={{width: "10rem", height: "10rem"}}>
         {/* image  */}
        <img src={props.image} className="card-img-top" alt="RestauurantImage"/>
        {/* text */}
        <div className="card-body">
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    
    )
}
// export default CategoryOptions;