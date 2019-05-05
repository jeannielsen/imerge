import React from "react";
import MapsAPI from "../../utils/API"

export class RestaurantOptionsPanel extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          selectedRadioButton: "",
          apidata: ""
        };
        this.handleRestaurantRadioClick = this.handleRestaurantRadioClick.bind(this);
      }
    
     
    handleRestaurantRadioClick(event) {
        this.setState({
            selectedRadioButton: event.target.value
            
        });
        console.log("inside event radiovalue"+this.state.selectedRadioButton);
        // MapsAPI.getRestaurantAPI(47.840459479922835,-122.17669855717743,this.state.selectedRadioButton);
        
    }

    componentDidUpdate(){
      MapsAPI.getRestaurantAPI(47.84039612005699,-122.17650237833391,this.state.selectedRadioButton).then(res =>
        // this.setState({
        //   apidata: res.data
        // })
        
        console.log("api data",res.data)
      )
      
      .catch(err => console.log(err));
     
    }

    render() {
        console.log("radiovalue"+this.state.selectedRadioButton);
    const cuisines = [ 'Asian', 'Barbecue', 'Breakfast', 'Cafe', 'Chinese',
     'European', 'Fast food', 'Hamburger',
    'Ice cream', 'Indian', 'Indonesian', 'Irish', 'italian', 'Jamaican',
    'Japanese', 'Korean', 'Mediterranean',
    'Mexican', 'Philippine',
    'Portuguese', 'Sausage', 'Seafood', 'Soul food',
    'Spanish Cuisine', 'Steak', 'Street food', 'Sushi',
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
      
return<div>{radioButtons}</div>;
    }
       }
