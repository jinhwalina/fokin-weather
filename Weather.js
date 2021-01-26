import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Haze:{
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"]
    },
    Thunderstorm:{
        iconName: "weather-hail",
        gradient: ["#373B44","#4286F4"]
    },
    Drizzle:{
        iconName: "weather-hail",
        gradient: ["#89F7FE","#66A6FF"]
    },
    Rain:{
        iconName: "weather-rainy",
        gradient: ["#4DA0B0","#D39D38"]
    },
    Snow:{
        iconName: "weather-snowy",
        gradient: ["#7DE2FC","#B9B6E5"]
    },
    Atmosphere:{
        iconName: "weather-hail",
        gradient: ["#89F7FE","#66A6FF"]
    },
    Clear:{
        iconName: "weather-sunny",
        gradient: ["#FEF253","#FF7300"]
    },
    Clouds:{
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC","#304352"]
    },
    Mist:{
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"]
    },
    Dust:{
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"]
    }

}

export default function Weather({temp, condition}){
    return (

        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
        >
            <StatusBar barStyle="Light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={styles.container}></View>
        </LinearGradient>

    );
}
Weather.propTypes ={
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 32,
        color: 'white'
    },
    halfContainer :{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})