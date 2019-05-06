import React, { Component } from "react";

import { CategoryOptionsPanel } from '../CategoryOptionsPanel';
import { RestaurantOptionsPanel } from '../RestaurantOptionsPanel';
// import "./style.css";
import RestaurantImage from './Restaurant.jpg';
import GroceryImage from './grocery-icon.png';
import ImmigrationImage from './immigration-icon.png';
import HealthCareImage from './hospital-icon.png';

class SidePanel extends Component {
  constructor() {
    super();
    this.state = {
      RestaurnatIcon: RestaurantImage,
      GroceryIcon: GroceryImage,
      ImmigrationIcon: ImmigrationImage,
      HealthCareIcon: HealthCareImage,
      text: "Select a category you need",
      mode: 'categoryOptions'
    }
    this.handleRestaurantClick = this.handleRestaurantClick.bind(this);
 immigration-offices-marker
    this.handleImmigrationOfficeClick = this.handleImmigrationOfficeClick.bind(this);
    this.handleHealthCareClick = this.handleHealthCareClick.bind(this);
    
  }

  // Function for handleRestaurantClick
  handleRestaurantClick() {
    this.setState({
      mode: 'Restaurant',
      text: 'Choose Restaurant Type'
    });
    //  this.addCuisines()
  }

  componentDidUpdate() 
    // this.addCuisines();    
  }

  render() {

    const categoryOptions = this.state.mode === 'categoryOptions';
    const RestaurantOptions = this.state.mode === 'Restaurant';
    const ImmigrationOfficeDetails = this.state.mode === 'ImmigrationOffices';
    const HealthCareDetails = this.state.mode === 'HealthCare';
    
    return (

      <div className="card" >
        {/* Main card header */}
        <div className="card-header">
          {this.state.text}
        </div>
        {/* main card body */}




        {/*  Using short circuit operator to render category options if mode =categoryoptions and hide foll JSX elements if mode !=categoryoptions */}
        {

            <div className="card-body">
              <div className="row" >
                {/* subcards */}
                <div className="col-sm-6" >
                  {/* remove the href */}
                  <a onClick={this.handleRestaurantClick}>
                    <CategoryOptionsPanel text="Restaurants nearby" image={this.state.RestaurnatIcon} />
                  </a>
                </div>
                <div className="col-sm-6" >
                  <a href='#'>
                    <CategoryOptionsPanel text="Grocery nearby" image={this.state.GroceryIcon} />
                  </a>
                </div>
              </div>
              <div className="row" >
                {/* removed the href */}
                <a>
                  <CategoryOptionsPanel text="Immigration offices nearby" image={this.state.ImmigrationIcon} />
                </a>
              </div>
            </div>


          RestaurantOptions && (
immigration-offices-marker
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

{/* Using short circuit operator to render nearby immigration offices if mode = 'ImmigrationOffices' */}
     {
          ImmigrationOfficeDetails && (
      <div className="card-body">
        <div className = "row" >

        <h1> </h1>
        </div>
      </div>
    
          )
          }


{/* Using short circuit operator to render nearby healthcare services if mode = 'HealthCare' */}
     {
          HealthCareDetails && (
      <div className="card-body">
        <div className = "row" >

        <h1> </h1>
        </div>
      </div>
    
          )
          }




    </div>
  )
}
            <div className="card-body">
              <div className="row" >

                <form>

                  {/* <ul id="cuisine_types">  */}
                  <RestaurantOptionsPanel restaurantType="Chinese" />
                  <RestaurantOptionsPanel restaurantType="Indian" />
                  <RestaurantOptionsPanel restaurantType="American" />
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