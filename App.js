import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";


export default class extends React.Component {
  state = {
    isLoading: true
  }
  getLocation = async() => {
    try {
      //throw Error(); 이 코드로 에러를 발생시킨다면, catch문의 에러가 실행되서 알럿창이 뜬다. 
      await Location.requestPermissionsAsync(); // 사용자의 permission을 통해서 사용자의 위치를 얻을 수 있다. 
      const { 
        coords : { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
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