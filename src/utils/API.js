import axios from "axios";


export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(latitude,longitude,ethnicity) {
    return axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude+","+longitude+"&radius=1500&type=restaurant&keyword="+ethnicity+"&key=AIzaSyB-Yiy5ruk26yFaZWv6RyR5CqZ5W7z1Pjk");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};


// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=indian&key=AIzaSyB-Yiy5ruk26yFaZWv6RyR5CqZ5W7z1Pjk