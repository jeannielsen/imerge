import React, { Component } from "react";
 import {CategoryOptions} from '../CategoryOptions';
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
      ImmigrationIcon: ImmigrationImage
    }
  }

  render() {
  return (
    <div className="card" >
      {/* Main card header */}
      <div className="card-header">
        Select a category you need
      </div>
       {/* main card body */}
      <div className="card-body">
        <div className = "row" >
          {/* subcards */}
          <div className = "col-sm-6" >
            <CategoryOptions text = "Restaurants nearby" image ={this.state.RestaurnatIcon}/>
          </div>
          <div className = "col-sm-6" >
            <CategoryOptions text = "Grocery nearby" image ={this.state.GroceryIcon}/>
          </div>
        </div>
        <div className = "row" >
          <CategoryOptions text = "Immigration offices nearby" image ={this.state.ImmigrationIcon}/>
        </div>
      </div>
    </div>

     
  )
}
}

export default SidePanel;