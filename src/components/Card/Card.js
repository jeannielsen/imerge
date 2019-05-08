import React from "react";
import "./style.css";


const Cards = props => (
    <div class="one_card">
        <div class="image_box">
            <img class="card-img-top img-responsive" alt={props.name} src={props.image} />
            <h5>{props.name}</h5>
        </div>
        <ul>
            <li>{props.address}</li>
            <li>{props.phone}</li>
            <li><a href={props.url} class="btn btn-primary">Website</a></li>
        </ul>
    </div>
)

export default Cards;