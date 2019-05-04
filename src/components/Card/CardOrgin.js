import React from "react";
import "./style.css";

const Cards = props => (

    <card>
        <img class="card-img-top img-fluid" alt={props.name} src={props.image} />
        <div class="card-body">
            <p><strong>{props.name}</strong></p>
            <p>{props.address}</p>
            <p>{props.phone}</p>
            <a href={props.url} class="btn btn-primary">Website</a>
        </div>
    </card>
)

export default Cards;