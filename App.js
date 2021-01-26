import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "d73b010f0c0dcfc1bb068d7b80d54708"

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      console.log(data);
  }
  getLocation = async() => {
    try {
      //throw Error(); 이 코드로 에러를 발생시킨다면, catch문의 에러가 실행되서 알럿창이 뜬다. 
      await Location.requestPermissionsAsync(); // 사용자의 permission을 통해서 사용자의 위치를 얻을 수 있다. 
      const { 
        coords : { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false }); 
    } catch (error) {
      Alert.alert("Can't find you", "So sad ;(")
    }
    
  };
  
  componentDidMount(){
    this.getLocation();
  } 
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading/> : null;
  }
}