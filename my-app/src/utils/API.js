import axios from "axios";
const parkWhizURL = "http://api.parkwhiz.com/search/";

//in .env file
/*const parkWhizAPIkey */




export default {
  //ZIP CODE FOR RESTAURANTS AND BARS 
  getZipPlaces: function(zipcode) {
    // return axios.get(milestone1ZipCodeURL+"food+in+Atlanta+"+zipcode+zipcodeAPIkey);
  // return axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+lat+","+lng+"&radius=2500&type=restaurant"+zipcodeAPIkey)
  return axios.get ("https://maps.googleapis.com/maps/api/geocode/json?address="+zipcode+zipcodeAPIkey);
  },
  //PLACE HOURS FOR RESTAURANTS AND BARS
  getPlaceHours: function(placeid) {
    return axios.get(getPlaceHours+placeid+zipcodeAPIkey+"&fields=name,opening_hours");
  },
  getCordinates: function(zipcode) {
    return axios.get("/mygeocoder/" +zipcode)
  }	
};