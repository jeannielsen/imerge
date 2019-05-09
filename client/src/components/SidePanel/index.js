import React, { Component } from "react";
import { withTranslation } from 'react-i18next';
import {CategoryOptionsPanel} from '../CategoryOptionsPanel';
import "./style.css";
 import {RestaurantOptionsPanel} from '../RestaurantOptionsPanel';
 import {GroceryOptionsPanel} from '../GroceryOptionsPanel';
import RestaurantImage from './Restaurant.jpg';
import GroceryImage from './grocery-icon.png';
import EmbassyImage from './embassy-icon.png';
import ImmigrationImage from './immigration-icon.png';
import HealthCareImage from './hospital-icon.png';
import PostOfficeImage from './PostOffice-icon.jpg';
import SchoolImage from './school-icon.jpg';
import BankImage from './bank-icon.png';
import BusStopImage from './bus-stop-icon.png';
import AirportImage from './airport-icon.png';
import MovieImage from './movie-2-icon.jpg';
import ParkImage from './park-icon.png';
import TempleImage from './temple-2-icon.jpg';
import ChurchImage from './church-icon.jpg';
import MosqueImage from './mosque-icon.png';


class SidePanel extends Component {
  
  constructor() {
    super();
    this.state = {
      RestaurnatIcon: RestaurantImage,
      GroceryIcon: GroceryImage,
      EmbassyIcon: EmbassyImage,
      GovtOfficeIcon: ImmigrationImage,
      HealthCareIcon: HealthCareImage,
      PostOfficeIcon:PostOfficeImage,
      SchoolIcon:SchoolImage,
      BankIcon:BankImage,
      BusStopIcon:BusStopImage,
      AirportIcon:AirportImage,
      MovieIcon:MovieImage,
      ParkIcon:ParkImage,
      TempleIcon:TempleImage,
      ChurchIcon:ChurchImage,
      MosqueIcon:MosqueImage,
      text: "Select a category you need",
      mode:'categoryOptions'
    }
    this.handleRestaurantClick = this.handleRestaurantClick.bind(this);
    this.handleGroceryClick = this.handleGroceryClick.bind(this);
    this.handleImmigrationOfficeClick = this.handleImmigrationOfficeClick.bind(this);
    this.handleHealthCareClick = this.handleHealthCareClick.bind(this);
    this.handlePostOfficeClick = this.handlePostOfficeClick.bind(this);
    this.handleSchoolClick = this.handleSchoolClick.bind(this);
    this.handleBankClick = this.handleBankClick.bind(this);
    this.handleBusStopClick = this.handleBusStopClick.bind(this);
    this.handleParkClick = this.handleParkClick.bind(this);
    this.handleAirportClick = this.handleAirportClick.bind(this);
    this.handleMovieClick = this.handleMovieClick.bind(this);
    this.handleTempleClick = this.handleTempleClick.bind(this);
    this.handleChurchClick = this.handleChurchClick.bind(this);
    this.handleMosqueClick = this.handleMosqueClick.bind(this);
    this.handlePassedRadioValue = this.handlePassedRadioValue.bind(this);
    this.handleEmbassyClick = this.handleEmbassyClick.bind(this);
    
  }//End of constructor

  // Function for handleRestaurantClick
  handleRestaurantClick() {
    // this.props.onClick("restaurant");
    this.setState({mode: 'restaurant',
    text: 'Choose Restaurant Type'});
    
   }

  handlePassedRadioValue(passedRadioValue){
    console.log("inside child");
    
    this.props.onClick(this.state.mode,passedRadioValue);
    
  }

  handleGroceryClick() {
    this.setState({mode: 'store',
    text: 'Choose Grocery Type'});
   }

   handleEmbassyClick(){
    this.setState({mode: 'embassy',
    text: 'Click on the markers for nearby Embassy details'});
    this.props.onClick("embassy");
  }
 
  // Function for handleImmigrationOfficeClick
  handleImmigrationOfficeClick() {
    this.setState({mode: 'local_government_office',
    text: 'Click on the markers for nearby Government office details'});
    this.props.onClick("local_government_office");
  //  this.addCuisines()
  }

  handleHealthCareClick(){
    this.setState({mode: 'hospital',
    text: 'Click on the markers for nearby HealthCare details'});
    this.props.onClick("hospital");
  }

  handlePostOfficeClick(){
    this.setState({mode: 'postOffice',
    text: 'Click on the markers for nearby postoffice details'});
    this.props.onClick("post_office");
  }

  handleSchoolClick(){
    this.setState({mode: 'school',
    text: 'Click on the markers for nearby School details'});
    this.props.onClick("school");
  }

  handleBankClick(){
    this.setState({mode: 'bank',
    text: 'Click on the markers for nearby Bank details'});
    this.props.onClick("bank");
  }

  handleBusStopClick(){
    this.setState({mode: 'busStop',
    text: 'Click on the markers for nearby Bus Stop details'});
    this.props.onClick("bus_station");
  }

  handleParkClick(){
    this.setState({mode: 'park',
    text: 'Click on the markers for nearby Park details'});
    this.props.onClick("park");
  }

  handleAirportClick(){
    this.setState({mode: 'airport',
    text: 'Click on the markers for nearby Airport details'});
    this.props.onClick("airport");
  }

  handleMovieClick(){
    this.setState({mode: 'movie',
    text: 'Click on the markers for nearby Movie Theatre details'});
    this.props.onClick("movie_theater");
  }

  handleTempleClick(){
    this.setState({mode: 'temple',
    text: 'Click on the markers for nearby Temple details'});
    this.props.onClick("hindu_temple");
  }

  handleChurchClick(){
    this.setState({mode: 'church',
    text: 'Click on the markers for nearby Church details'});
    this.props.onClick("church");
  }

  handleMosqueClick(){
    this.setState({mode: 'mosque',
    text: 'Click on the markers for nearby Mosque details'});
    this.props.onClick("mosque");
  }
    
  render() {
    
    const categoryOptions = this.state.mode === 'categoryOptions';
    const RestaurantOptions = this.state.mode === 'restaurant';
    const GroceryOptions = this.state.mode === 'store';
    const ImmigrationOfficeDetails = this.state.mode === 'localGovernmentOffice';
    const HealthCareDetails = this.state.mode === 'hospital';
    const PostOfficeDetails = this.state.mode === 'postOffice';
    const BankDetails = this.state.mode === 'bank';
    const SchoolDetails = this.state.mode === 'school';
    const AirportDetails = this.state.mode === 'airport';
    const BusStopDetails = this.state.mode === 'busStop';
    const MovieDetails = this.state.mode === 'movie';
    const ParkDetails = this.state.mode === 'park';
    const TempleDetails = this.state.mode === 'temple';
    const ChurchDetails = this.state.mode === 'church';
    const MosqueDetails = this.state.mode === 'mosqe';
    const { t } = this.props;

    return (
    <div className="card cardbox" >
      {/* Main card header */}
      <div className="card-header">
      {
          !categoryOptions && (
            <div className = "GoBack">
             <a  href="/Maps">{t("Go back")}</a>
          </div>
          )
      }
        {this.state.text}
        
        
      </div>
       {/* main card body */}   

        {/* Using short circuit operator to render category options if mode =categoryoptions and hide other JSX elements if mode !=categoryoptions*/}
     {
          categoryOptions && (
      <div className="card-body">
      {/* First row */}
        <div className = "row" >
          {/* subcards */}
          <div className = "col-sm-6" >
          <a href = '#' onClick = {this.handleRestaurantClick}>
            <CategoryOptionsPanel text = {t("Restaurants")} image ={this.state.RestaurnatIcon}/>
         </a>
          </div>
          <div className = "col-sm-6" >
          <a href = '#' onClick = {this.handleGroceryClick}>
            <CategoryOptionsPanel text = {t("Grocery Stores")} image ={this.state.GroceryIcon}/>
            </a>
          </div>
        </div>
      

        {/* Second row */}
        <div className = "row" >
        <div className = "col-sm-6" >
        <a href = '#' onClick = {this.handleImmigrationOfficeClick}>
          <CategoryOptionsPanel text = {t("Government office")} image ={this.state.GovtOfficeIcon}/>
          </a>
          </div>
          <div className = "col-sm-6" >
        <a href = '#' onClick = {this.handleEmbassyClick}>
          <CategoryOptionsPanel text = {t("Embassy")} image ={this.state.EmbassyIcon}/>
          </a>
          </div>
        </div>
      
      {/* Third row */}
      <div className = "row" >
        <div className = "col-sm-6" >
        <a href = '#' onClick = {this.handleBankClick}>
          <CategoryOptionsPanel text = {t("Banks")} image ={this.state.BankIcon}/>
          </a>
          </div>
          <div className = "col-sm-6" >
        <a href = '#' onClick = {this.handleHealthCareClick}>
          <CategoryOptionsPanel text = {t("HealthCare")} image ={this.state.HealthCareIcon}/>
          </a>
          </div>
        </div>

         {/* Fourth row */}
      <div className = "row" >
        <div className = "col-sm-6" >
        <a href = '#'onClick = {this.handleSchoolClick}>
          <CategoryOptionsPanel text = {t("Schools")} image ={this.state.SchoolIcon}/>
          </a>
          </div>
          <div className = "col-sm-6" >
        <a href = '#' onClick = {this.handlePostOfficeClick}>
          <CategoryOptionsPanel text = {t("Post Offices")} image ={this.state.PostOfficeIcon}/>
          </a>
          </div>
        </div> 
    
         {/* Fifth row */}
      <div className = "row" >
        <div className = "col-sm-6" >
        <a href = '#' onClick = {this.handleBusStopClick}>
          <CategoryOptionsPanel text ={t("Bus Stops")} image ={this.state.BusStopIcon}/>
          </a>
          </div>
          <div className = "col-sm-6" >
        <a href = '#' onClick = {this.handleAirportClick}>
          <CategoryOptionsPanel text = {t("Airports")} image ={this.state.AirportIcon}/>
          </a>
          </div>
        </div>

         {/* Sixth row */}
      <div className = "row" >
        <div className = "col-sm-6" >
        <a href = '#' onClick = {this.handleMovieClick}>
          <CategoryOptionsPanel text = {t("Movie Theaters")} image ={this.state.MovieIcon}/>
          </a>
          </div>
          <div className = "col-sm-6" >
        <a href = '#' onClick = {this.handleParkClick}>
          <CategoryOptionsPanel text = {t("Public Parks")} image ={this.state.ParkIcon}/>
          </a>
          </div>
        </div>

         {/* Seventh row */}
      <div className = "row" >
        <div className = "col-sm-6" >
        <a href = '#' onClick = {this.handleTempleClick}>
          <CategoryOptionsPanel text ={t("Temples")} image ={this.state.TempleIcon}/>
          </a>
          </div>
          <div className = "col-sm-6" >
        <a href = '#' onClick = {this.handleChurchClick}>
          <CategoryOptionsPanel text = {t("Churches")} image ={this.state.ChurchIcon}/>
          </a>
          </div>
        </div>

         {/* Eighth row */}
      <div className = "row" >
        <div className = "col-sm-6" >
        <a href = '#' onClick = {this.handleMosqueClick}>
          <CategoryOptionsPanel text = {t("Mosques")} image ={this.state.MosqueIcon}/>
          </a>
          </div>
          </div>
        
      </div>
    
          )
          }

   
      {/* Using short circuit operator to render restaurant radio button options if mode =restaurantoptions */}
     {
          (RestaurantOptions) && (
      <div className="card-body">
        <div className = "row" >

        <form>
          <RestaurantOptionsPanel  onClick = {this.handlePassedRadioValue}/>
        </form>
 
        </div>
      </div>
    
          )
          }


 {/* Using short circuit operator to render Grocery store radio button options if mode =restaurantoptions */}
 {
          (GroceryOptions) && (
      <div className="card-body">
        <div className = "row" >

        <form>
          <GroceryOptionsPanel  onClick = {this.handlePassedRadioValue}/>
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

        </div>
      </div>
    
          )
          }




    </div>
  )
}
}

export default withTranslation()(SidePanel);
