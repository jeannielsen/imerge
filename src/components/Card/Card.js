import React from "react";
// import "./style.css";

const Cards = props => (
    <card>
    <div className="card">
            <div className="img-container">
            <img alt={props.name} src={props.image} />
            <li>{props.name}</li>
            <li>{props.address}</li>
            <li>{props.phone}</li>
            <li>{props.url}</li>
            {/* <Card.Link href={props.url}>Website</Card.Link> */}
    </div>
    </div>
    </card>
)

export default Cards;