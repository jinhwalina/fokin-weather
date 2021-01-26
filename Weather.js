import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Haze:{
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        title: "",
        subtitle: ""
    },
    Thunderstorm:{
        iconName: "weather-hail",
        gradient: ["#373B44","#4286F4"],
        title: "",
        subtitle: ""
    },
    Drizzle:{
        iconName: "weather-hail",
        gradient: ["#89F7FE","#66A6FF"],
        title: "",
        subtitle: ""
    },
    Rain:{
        iconName: "weather-rainy",
        gradient: ["#4DA0B0","#D39D38"],
        title: "비",
        subtitle: "제발 멈춰줘!"
    },
    Snow:{
        iconName: "weather-snowy",
        gradient: ["#7DE2FC","#B9B6E5"],
        title: "",
        subtitle: ""
    },
    Atmosphere:{
        iconName: "weather-hail",
        gradient: ["#89F7FE","#66A6FF"],
        title: "",
        subtitle: ""
    },
    Clear:{
        iconName: "weather-sunny",
        gradient: ["#FEF253","#FF7300"],
        title: "해쨍쨍",
        subtitle: "내가 제일 좋아하는 날씨"
    },
    Clouds:{
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC","#304352"],
        title: "구름",
        subtitle: "내가 제일 싫어하는 날씨"
    },
    Mist:{
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        title: "",
        subtitle: ""
    },
    Dust:{
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        title: "",
        subtitle: ""
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
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
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
        color: 'white',
        fontWeight: '500'
    },
    halfContainer: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10
    },
    subtitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    }
});