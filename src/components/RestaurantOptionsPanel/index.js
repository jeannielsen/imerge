import React from "react";

export class RestaurantOptionsPanel extends React.Component {


    handleRestaurantRadioClick() {
        console.log("alert executing");
    }

    render() {
    const cuisines = ['African', 'Asian', 'Barbecue', 'Brazilian',
    'Breakfast', 'Cafe', 'Chinese', 'Hawaii',
    'Doughnut', 'European', 'Fast food', 'Hamburger',
    'Ice cream', 'Indian', 'Indonesian', 'Irish', 'Italian', 'Jamaican',
    'Japanese', 'Jewish', 'Korean', 'Malaysian', 'Mediterranean',
    'Mexican', 'Moroccan', 'Peruvian', 'Philippine',
    'Polish', 'Portuguese', 'Russian', 'Sausage', 'Seafood', 'Soul food',
    'Spanish Cuisine', 'Sri Lankan', 'Steak', 'Street food', 'Sushi', 'Swiss',
    'Tapas', 'Thai', 'Tunisian', 'Turkish', 'Vegetarian', 'Vietnamese']
    console.log("restaurant type executing");

    //Using array map function to get radiobutton for each cuisine type
    const radioButtons = cuisines.map(cuisineType => {
    return (
        
 <div>
  <input type="radio" id="{cuisineType+'id'}" name="{cuisineType+'name'}" value="{cuisineType}" onClick = {this.handleRestaurantRadioClick} />{cuisineType}
  {/* <label class="custom-control-label" for="customRadio1">{props.restaurantType}</label> */}
{/* <form >
  <input type="radio" name="gender" value="male"> Male<br> */}
{/* onClick = handleRestaurantRadioClick */}
</div>  

    )
});
      
return<div>{radioButtons}</div>;
    }
       }
