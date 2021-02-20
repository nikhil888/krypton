import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
const image = require('../../assets/images/Saly-1.png');

const HomeScreen = () => {
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image} />
            <Text style={styles.header1}>Welcome To  <Text style={{ color: 'red' }}>
                Krypton
           </Text>{"\n"}</Text>
            <Text style={styles.header2}>Invest and compete with others,{"\n"} May the best man wins</Text>
        </View>
    )
}

export default HomeScreen
