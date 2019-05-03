import React from "react";
// import Restaurantimage from './Restaurant.jpg';



export function CategoryOptions(props) {
    return (
        //  subcard 
        <div className="card" style={{width: "10rem", height: "15rem"}}>
         {/* image  */}
        <img src={props.image} className="card-img-top" alt="RestauurantImage"/>
        {/* text */}
        <div className="card-body">
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    
    )
}
// export default CategoryOptions;