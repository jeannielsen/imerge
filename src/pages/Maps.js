
import React, { Component } from "react";
// import API from "../utils/API";
import SidePanel from "../components/SidePanel";
// import InnerMap from "../components/InnerMap";
import "../components/InnerMap/style.css";
import MapsAPI from "../utils/API";
import InfoWindow from "../components/InfoWindow";




class Maps extends Component {
    constructor() {
        super();
        this.state = {
          lat: 0,
          long: 0,
          categorySelectionMode: "",
          immigrationOfficesApiData:[],
          healthCareApiData:[]
         
        }
        // this.restaurantApiDataChangeState = this.restaurantApiDataChangeState.bind(this);
        this.changecategorySelectionMode = this.changecategorySelectionMode.bind(this);

      }

      componentDidUpdate(){  
        // if (this.state.categorySelectionMode === "immigrationOffices")
        // {
           console.log("exec immigration event",this.state.immigrationOfficesApiData);
        
           let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: this.state.lat, lng: this.state.long},
            zoom: 13,
            mapTypeId: 'roadmap'
          });
         
          //using ES6 For..of to get marker for each of the immigration offices
              for (let latLongValue of this.state.immigrationOfficesApiData) {
                // console.log(latLongValue.geometry.location);
                let marker = new window.google.maps.Marker({
                    map: map,
                    position: {lat: latLongValue.geometry.location.lat, lng: latLongValue.geometry.location.lng},
                });
                marker.addListener('click', e => {
                  this.createInfoWindow(e, map)
                  
                })
              }

        }

        
        createInfoWindow(e, map) {
          let contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
                        '<div id="bodyContent">'+
            '<div> <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'View Details</a> '+
            '</div>'+'<div> <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'Get Directions</a> '+
            '</div>'+
            '</div>'+
            '</div>';

          console.log("inside infowindow");
          const infoWindow = new window.google.maps.InfoWindow({
            content: contentString,
              position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
          })
        //   // infoWindow.addListener('domready', e => {
        //   //   render(<InfoWindow />, document.getElementById('infoWindow'))
        //   // })
          infoWindow.open(map)
        }



      changecategorySelectionMode(newCategory){
        // this.setState({
        //   categorySelectionMode: newCategory
        // });
        // if (this.state.categorySelectionMode === "immigrationOffices")
        // {
           console.log("inside changecategorySelectionMode");
           MapsAPI.getImmigrationOfficesApi(this.state.lat,this.state.long).then(res =>
            // console.log("offices",res.data)
            this.setState({
              immigrationOfficesApiData: res.data.results
            })
           )
           .catch(err => console.log(err));

         
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
          console.log("lat"+ this.state.lat);
          console.log("long"+ this.state.long);
// for (let i=0;i<5;i++){
        //  Setting marker at the current location
          let marker = new window.google.maps.Marker({
            map: map,
            position: {lat: this.state.lat, lng: this.state.long},
          });
         
    }

    // restaurantApiDataChangeState(newRestaurantApiData){
    //   console.log("api data inside map.js",newRestaurantApiData)
      
    // }
    

  render() {
    return (
      <div className="container-fluid">
         <div className="row">
              <div className="col-sm-4">
                 {/* Calling SidePanel instance */}
                 <SidePanel onClick = {this.changecategorySelectionMode}>
         
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
