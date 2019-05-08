import React from "react";
import MapsAPI from "../../utils/API";
import Maps from "../../pages/Maps";
import {RestaurantApiDataStateChange} from '../RestaurantApiDataStateChange';

export class RestaurantOptionsPanel extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          selectedRadioButton: "",
          restaurantApiData: [],
          mapMode: 'currentLocationMarker'
        };
        this.handleRestaurantRadioClick = this.handleRestaurantRadioClick.bind(this);
      }
    
     
    handleRestaurantRadioClick(event) {
      this.setState({
        selectedRadioButton: event.target.value
      })
       
        console.log("inside grand child");
        this.props.onClick(event.target.value);
        // this.storeApiData();
        console.log("inside event radiovalue"+event.target.value);
       
        
    }
    

    componentDidUpdate(){
          
    }

    render() {
      
        console.log("radiovalue"+this.state.selectedRadioButton);
    const cuisines = [ 'American','Asian', 'Barbecue', 'Breakfast', 'Cafe', 'Chinese',
     'European', 'Fast food', 'Hamburger',
    'Ice cream', 'Indian', 'Indonesian', 'Irish', 'italian', 'Jamaican',
    'Japanese', 'Korean', 'Mediterranean',
    'Mexican', 'Philippine',
    'Portuguese', 'Sausage', 'Seafood', 'Soul food',
    'Spanish Cuisine', 'Steak', 'Street food', 'Sushi',
    'Tapas', 'Thai', 'Turkish', 'Vegetarian', 'Vietnamese']
    // console.log("restaurant type executing");

    //Using array map function to get radiobutton for each cuisine type
    const radioButtons = cuisines.map(cuisineType => {
    return (
        
 <div>
  <input type="radio" id={cuisineType} name={cuisineType}  value={cuisineType} checked={this.state.selectedRadioButton === cuisineType} onClick = {this.handleRestaurantRadioClick} />{cuisineType}
  {/* <label class="custom-control-label" for="customRadio1">{props.restaurantType}</label> */}
{/* <form >
  <input type="radio" name="gender" value="male"> Male<br> */}
{/* onClick = handleRestaurantRadioClick */}
</div>  

    )
});
      
return(
  <div>
<div>{radioButtons}</div>

{/* Using short circuit operator to render restaurantTypeSelected if selectedRadioButton !=empty string*/}
 {/* { */}
{/* // restaurantTypeSelected && (<RestaurantApiDataStateChange radioButtonSelected = {this.state.selectedRadioButton}/>)
// } */}

</div>
)
    }
       }
