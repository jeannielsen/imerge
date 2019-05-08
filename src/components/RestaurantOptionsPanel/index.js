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
            
        });
        // this.storeApiData();
        console.log("inside event radiovalue"+this.state.selectedRadioButton);
        // MapsAPI.getRestaurantAPI(47.840459479922835,-122.17669855717743,this.state.selectedRadioButton);
        
    }
    // storeApiData(){
    //   console.log("inside event radiovalue",this.state.selectedRadioButton);
    // }

    componentDidUpdate(){
      MapsAPI.getRestaurantAPI(47.84039612005699,-122.17650237833391,this.state.selectedRadioButton).then(res =>
        // this.setState({
          // restaurantApiData: res.data.results,
          // mapMode: 'RestaurantsMarker'
        // })
        // Maps.restaurantApiDataChangeState(res.data)
        
        console.log("api data",res.data),

        // data.results[0].geometry.location.lat
        // console.log("api data lat",res.data.results[0].geometry.location.lat)
      )
      
      .catch(err => console.log(err));
     
    }

    render() {
      
      const restaurantTypeSelected = this.state.selectedRadioButton !== "";
      const currentLocationMarker = this.state.mapMode === 'currentLocationMarker';
      const RestaurantsMarker = this.state.mapMode === 'RestaurantsMarker';
        console.log("radiovalue"+this.state.selectedRadioButton);
    const cuisines = [ 'Asian', 'Barbecue', 'Breakfast', 'Cafe', 'Chinese',
     'European', 'Fast food', 'Hamburger',
    'Ice cream', 'Indian', 'Indonesian', 'Irish', 'Italian', 'Jamaican',
    'Japanese', 'Korean', 'Mediterranean',
    'Mexican', 'Philippine',
    'Portuguese', 'Sausage', 'Seafood', 'Soul Food',
    'Spanish Cuisine', 'Steak', 'Street Food', 'Sushi',
    'Tapas', 'Thai', 'Turkish', 'Vegetarian', 'Vietnamese']
    console.log("restaurant type executing");

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
<div>{radioButtons}</div>;

{/* Using short circuit operator to render restaurantTypeSelected if selectedRadioButton !=empty string*/}
 {/* { */}
{/* // restaurantTypeSelected && (<RestaurantApiDataStateChange radioButtonSelected = {this.state.selectedRadioButton}/>)
// } */}

</div>
)
    }
       }
