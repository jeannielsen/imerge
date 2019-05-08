import axios from "axios";


export default {
   getRestaurantOrGroceryAPI: function(latitude,longitude,searchType,ethnicity) {
    console.log("Exec API");
    
    return axios.get("/maps/api/place/nearbysearch/json?location=" + latitude+","+longitude+"&radius=50000&type="+searchType+"&keyword="+ethnicity+"&key=AIzaSyB-Yiy5ruk26yFaZWv6RyR5CqZ5W7z1Pjk" )
  },
  getApiData: function(latitude,longitude,searchType) {
    return axios.get("/maps/api/place/nearbysearch/json?location=" + latitude+","+longitude+"&radius=10000&type="+searchType+"&key=AIzaSyB-Yiy5ruk26yFaZWv6RyR5CqZ5W7z1Pjk" )
  }
  
};


// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=indian&key=AIzaSyB-Yiy5ruk26yFaZWv6RyR5CqZ5W7z1Pjk