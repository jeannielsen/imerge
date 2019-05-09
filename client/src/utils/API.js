import axios from "axios";


export default {
   getRestaurantOrGroceryAPI: function(latitude,longitude,searchType,ethnicity) {
    return axios.get("/maps/api/place/nearbysearch/json?location=" + latitude+","+longitude+"&radius=50000&type="+searchType+"&keyword="+ethnicity+"&key=AIzaSyB-Yiy5ruk26yFaZWv6RyR5CqZ5W7z1Pjk" )
  },
  getApiData: function(latitude,longitude,searchType) {
    return axios.get("/maps/api/place/nearbysearch/json?location=" + latitude+","+longitude+"&radius=10000&type="+searchType+"&key=AIzaSyB-Yiy5ruk26yFaZWv6RyR5CqZ5W7z1Pjk" )
  },
  getCid: function(placeId) {
    return axios.get("/maps/api/place/details/json?placeid=" + placeId+"&key=AIzaSyB-Yiy5ruk26yFaZWv6RyR5CqZ5W7z1Pjk" )
  }
  
};
