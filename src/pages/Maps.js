
import React, { Component } from "react";
// import API from "../utils/API";
import SidePanel from "../components/SidePanel";
// import InnerMap from "../components/InnerMap";
import "../components/InnerMap/style.css";

class Maps extends Component {
    constructor() {
        super();
        this.state = {
          lat: 0,
          long: 0
        }
      }

      componentWillMount() {

      }
  // After the very first render, display the map in map div card
  
componentDidMount() {  
    this.getLocation();    
  }
//   Get current location using geolocation
   getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
          
        } else { 
            var x = document.getElementById("map");
           x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    // current latitude and longitude is available in argument position
    showPosition = (position) => { 
           const latitude= position.coords.latitude ;
           const longitude = position.coords.longitude;
          this.setState({
              lat:latitude,
              long:longitude
          });
         
          let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: this.state.lat, lng: this.state.long},
            zoom: 13,
            mapTypeId: 'roadmap',
          });
          console.log("lat"+ this.state.latitude);
          console.log("long"+ this.state.longitude);
    }

 
  render() {
    return (
      <div className="container-fluid">
         <div className="row">
              <div className="col-sm-4">
                 {/* Calling SidePanel instance */}
                 <SidePanel >
         
                 </SidePanel >
                
              </div>
              <div className="col-sm-8">
                 {/* Map div */}
                 {/* <InnerMap > */}
                   <div className="card" id='map' >
                    </div>
                    {/* </InnerMap>  */}
              </div>
            </div>
       </div>
    );
  }
}

export default Maps;
