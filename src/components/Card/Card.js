import React from "react";
import Card from 'react-bootstrap/Button';
import "./style.css";

const Cards = props => (
    <card>
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
                <div className='card-body'>
                <ul class="list-group list-group-flush">
                    <li>{props.name}</li>
                    <li>{props.address}</li>
                    <li>{props.phone}</li>
                    <a href={props.url} class="btn btn-primary">Website</a>
                    </ul>
                </div>
            </div>
        </div>
    </card>
)

export default Cards;