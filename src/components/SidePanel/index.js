import React, { Component } from "react";

 import {CategoryOptionsPanel} from '../CategoryOptionsPanel';
 import {RestaurantOptionsPanel} from '../RestaurantOptionsPanel';
// import "./style.css";
import RestaurantImage from './Restaurant.jpg';
import GroceryImage from './grocery-icon.png';
import ImmigrationImage from './immigration-icon.png';

class SidePanel extends Component {
  constructor() {
    super();
    this.state = {
      RestaurnatIcon: RestaurantImage,
      GroceryIcon: GroceryImage,
      ImmigrationIcon: ImmigrationImage,
      text: "Select a category you need",
      mode:'categoryOptions'
    }
    this.handleRestaurantClick = this.handleRestaurantClick.bind(this);
    this.addCuisines = this.addCuisines.bind(this);
  }
 
  addCuisines= ()=> {
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
      var cuisineVal = cuisines[i].replace(/ /g,'').toLowerCase();

      var li = document.createElement('li');
      li.setAttribute("class", "cuisine");
      // radiobutton
      var checkbox = document.createElement('input');
      checkbox.type = "radio";
      checkbox.name = "cuisine";
      checkbox.value = cuisineVal;
      checkbox.id = cuisineVal;
      //label for radio button
      var label = document.createElement('label');
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(cuisines[i]));

      li.appendChild(label);
      document.getElementById("cuisine_types").appendChild(li);
      // this.ul.appendChild(li);
    }
  }
 

  // Function for handleRestaurantClick
  handleRestaurantClick() {
    this.setState({mode: 'Restaurant',
    text: 'Choose Restaurant Type'});
  //  this.addCuisines()
  }

  componentDidUpdate() {  
    // this.addCuisines();    
  }

  render() {
    
    const categoryOptions = this.state.mode === 'categoryOptions';
    const RestaurantOptions = this.state.mode === 'Restaurant';
    return (
    <div className="card" >
      {/* Main card header */}
      <div className="card-header">
        {this.state.text}
      </div>
       {/* main card body */}


      


        {/* Using short circuit operator to render category options if mode =categoryoptions and hide foll JSX elements if mode !=categoryoptions*/}
     {
          categoryOptions && (
      <div className="card-body">
        <div className = "row" >
          {/* subcards */}
          <div className = "col-sm-6" >
          <a href = '#' onClick = {this.handleRestaurantClick}>
            <CategoryOptionsPanel text = "Restaurants nearby" image ={this.state.RestaurnatIcon}/>
         </a>
          </div>
          <div className = "col-sm-6" >
          <a href = '#'>
            <CategoryOptionsPanel text = "Grocery nearby" image ={this.state.GroceryIcon}/>
            </a>
          </div>
        </div>
        <div className = "row" >
        <a href = '#'>
          <CategoryOptionsPanel text = "Immigration offices nearby" image ={this.state.ImmigrationIcon}/>
          </a>
        </div>
      </div>
    
          )
          }


      {/* Using short circuit operator to render restaurant options if mode =restaurantoptions and hide foll JSX elements if mode !=restaurantoptions*/}
     {
          RestaurantOptions && (
      <div className="card-body">
        <div className = "row" >

        <form>
            
            {/* <ul id="cuisine_types">  */}
            <RestaurantOptionsPanel restaurantType ="Chinese"/>
            <RestaurantOptionsPanel restaurantType ="Indian"/>
            <RestaurantOptionsPanel restaurantType ="American"/>
             {/* </ul>  */}
          </form>
 
        </div>
      </div>
    
          )
          }
  {/* {this.addCuisines()}; */}
    </div>
  )
}
}

export default SidePanel;