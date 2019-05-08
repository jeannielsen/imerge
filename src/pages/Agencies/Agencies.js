import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Cards from "../../components/Card";
import cards from "../../Cards.json";
import "./style.css";

import { withTranslation } from 'react-i18next';


class Agencies extends Component {
  constructor({ t, i18n }) {
    super({ t, i18n })
    this.t = t
  }

  state = {
    cards
  };

  render() {
    return (
      <div>
        <h1>{this.t('Agencies and Resources')}</h1>
        
        <Wrapper>
          {this.state.cards.map(card => (
            <Cards
              key={card.id}
              id={card.id}
              image={card.image}
              name={card.name}
              address={card.address}
              phone={card.phone}
              url={card.url}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default withTranslation()(Agencies);