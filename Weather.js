import React from 'react';
import propTypes from 'prop-types'
import {StyleSheet, Text,View, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient} from 'expo-linear-gradient';

import AppLoading from 'expo-app-loading';

const weatherOptions = {
    Rain: {
        iconName:"water-outline",
        gradient: ['#1F1C18','#8E0E00'],
        title: 'Rain',
        subtitle: 'What about just netflix and chill ;)'
    },
    Clear: {
        iconName:"sunny-outline",
        gradient: ['#6dd5ed','#78ffd6'],
        title: 'Sunny',
        subtitle: 'Go outside! Get a life!'
    },
    Thunderstorm:{
        iconName:"thunderstorm-outline",
        gradient:['#000428','#004e92'],
        title: 'Thunderstorm',
        subtitle: 'Thor might be up there? staying home plz'
    },
    Clouds:{
        iconName:"cloud-outline",
        gradient:['#2C3E50','#4CA1AF'],
        title: 'Cloudy',
        subtitle: 'Dont let the weather decide what you feel!!'
    },
Mist:{
    iconName:"reorder-four-outline",
    gradient:['#3a7bd5','#3a6073'],
    title: 'Mist',
        subtitle: 'Watch out!'
},
Snow:{
    iconName:"snow",
    gradient:['#004FF9','#4BC0C8','#6441A5'],
    title: 'Snow',
        subtitle: 'I wish white christmas'
},
Atmosphere:{
    iconName:"happy-outline",
    gradient:['#f8b500','#fceabb'],
    title: 'Atmosphere',
        subtitle: 'Just follow your mood'
},
Drizzle:{
    iconName:"rainy-outline",
    gradient:['#19547b','#ffd89b'],
    title: 'Drizzle',
        subtitle: 'I like drizzle on my icecream! not that freakin weather'
},
Haze:{
    iconName:"filter",
    gradient:['#BE93C5','#7BC6CC'],
    title: 'Haze',
        subtitle: 'Hey! zest stay home! '
},
dust:{
    iconName:"skull",
    gradient:['#bdc3c7','#2c3e50'],
    title: 'Dust',
        subtitle: 'I wish my account has more money than the number of dust outside'
},
}

export default function Weather({temp, condition}) {
  

    return <LinearGradient 
    colors={weatherOptions[condition].gradient}
    style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <View style={styles.halfcontainer}>
        <Ionicons style={styles.icon} size={70} 
        name={weatherOptions[condition].iconName} color='white'/>
        <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={styles.halfcontainer2}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
        </LinearGradient>
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        'Thunderstorm',
        'Clouds',
        'Clear',
        'Rain',
        'Mist',
        'thunderstorm',
        'Atmosphere',
        'Drizzle',
        'Haze',
        'dust'
    ]).isRequired
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:0,
    },
    halfcontainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    halfcontainer2: {
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
        

        
    },
    icon :{
        marginLeft:20,
        textShadowRadius:1.5,
        textShadowColor:'#243b55',
        textShadowOffset:{width:0.5,height:0.5},
        marginTop:50
    },
    temp : {
        fontSize:32,
        color: 'white',
        marginLeft:17,
        textShadowRadius:1.5,
        textShadowColor:'#243b55',
        textShadowOffset:{width:0.5,height:0.5}
    },
    title:{
        fontSize:35,
        color: 'white',
        textShadowRadius:1.5,
        textShadowColor:'#243b55'
        ,textShadowOffset:{width:0.5,height:0.5},
        fontWeight:'400',
        paddingLeft:20
    },
    subtitle:{
        fontSize:28,
        color: 'white',
        textShadowRadius:1.5,
        textShadowColor:'#243b55'
        ,textShadowOffset:{width:0.5,height:0.5},
        fontWeight:'600',
        paddingTop:20,
        paddingHorizontal:20
     
    }

})
