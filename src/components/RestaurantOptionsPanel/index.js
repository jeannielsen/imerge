import React from "react";

export function RestaurantOptionsPanel(props) {
    let cuisines = ['African', 'Asian', 'Barbecue', 'Brazilian',
    'Breakfast', 'Cafe', 'Chinese', 'Hawaii',
    'Doughnut', 'European', 'Fast food', 'Hamburger',
    'Ice cream', 'Indian', 'Indonesian', 'Irish', 'Italian', 'Jamaican',
    'Japanese', 'Jewish', 'Korean', 'Malaysian', 'Mediterranean',
    'Mexican', 'Moroccan', 'Peruvian', 'Philippine',
    'Polish', 'Portuguese', 'Russian', 'Sausage', 'Seafood', 'Soul food',
    'Spanish Cuisine', 'Sri Lankan', 'Steak', 'Street food', 'Sushi', 'Swiss',
    'Tapas', 'Thai', 'Tunisian', 'Turkish', 'Vegetarian', 'Vietnamese']
    console.log("restaurant type executing");
    for (var i = 0; i < cuisines.length; i++) {
       return (
        
 <div>


  <input type="radio" id="customRadio1" name="customRadio" value="customRadio1" />{props.restaurantType}
  {/* <label class="custom-control-label" for="customRadio1">{props.restaurantType}</label> */}

{/* <form >
  <input type="radio" name="gender" value="male"> Male<br> */}

{/* onClick = handleRestaurantRadioClick */}
        
       
</div>  

    )
       }
}