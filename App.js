import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";


const API_KEY = "d73b010f0c0dcfc1bb068d7b80d54708"

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main: { temp },
        weather
      } 
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      this.setState({ 
        isLoading: false, 
        condition: weather[0].main, 
        temp
      });
  };
  getLocation = async() => {
    try {
      //throw Error(); 이 코드로 에러를 발생시킨다면, catch문의 에러가 실행되서 알럿창이 뜬다. 
      await Location.requestPermissionsAsync(); // 사용자의 permission을 통해서 사용자의 위치를 얻을 수 있다. 
      const { 
        coords : { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("Can't find you", "So sad ;(")
    }
    
  };
  
  componentDidMount(){
    this.getLocation();
  } 
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}