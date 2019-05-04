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
            <RestaurantOptionsPanel />
                     {/* </ul>  */}
          </form>
 
        </div>
      </div>
    
          )
          }
    </div>
  )
}
}

export default SidePanel;