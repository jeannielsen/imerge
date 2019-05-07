import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Cards from "../components/Card";
import cards from "../Cards.json";
import { useTranslation } from 'react-i18next';


class Agencies extends Component {
  state = {
    cards
  };

  render() {
    return (
      <div>
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
 
export default Agencies;