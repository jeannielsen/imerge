import React from "react";
import "./style.css";


<div class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                 <img class="card-img-top img-responsive" alt={props.name} src={props.image} />
                     <h3>{props.name}</h3>
                         <ul>
                             <li>{props.address}</li>
                            <li>{props.phone}</li>
                            <li><a href={props.url} class="btn btn-primary">Website</a></li>
                         </ul>
            </div>
        </div>
    </div>
</div>

export default Cards;