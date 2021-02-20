import React from 'react';
import {View,Text,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PortfolioCoin from '../../components/PortfolioCoin'
import styles from './styles';
const image = require('../../assets/images/Saly-10.png');

const portfolioCoins = [{
    id:'1',
    name:'Virtual Dollars',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsrUrtzFSk6AtyI4gvyVFjum9BqVixMQ7hw&usqp=CAU',
    symbol:'USD',
    amount:69.54,
    valueUSD:69.45,
},
{
    id:'2',
    name:'Bitcoin',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsrUrtzFSk6AtyI4gvyVFjum9BqVixMQ7hw&usqp=CAU',
    symbol:'USD',
    amount:69.54,
    valueUSD:69.45,
},{
    id:'3',
    name:'Ethereum',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsrUrtzFSk6AtyI4gvyVFjum9BqVixMQ7hw&usqp=CAU',
    symbol:'USD',
    amount:69.54,
    valueUSD:69.45,
}]

const PortfolioScreen = () => {
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image}/>
            <View style={styles.balanceContainer}>
            <Text style={styles.label}>Portfolio Balance</Text>
            <Text style={styles.balance}>$69.20</Text>
            </View>
       
        <FlatList
        data={portfolioCoins}
        renderItem={({item}) => <PortfolioCoin portfolioCoin={item}/>}/>
        </View>
        )
    }

export default PortfolioScreen
