import React from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MarketCoin from '../../components/MarketCoin'
import styles from './styles';
const image = require('../../assets/images/Saly-17.png');

const MarketCoins = [{
    id: '1',
    name: 'Virtual Dollars',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsrUrtzFSk6AtyI4gvyVFjum9BqVixMQ7hw&usqp=CAU',
    symbol: 'USD',
    valueChange24: 2.4,
    valueUSD: 69.45,
},
{
    id: '2',
    name: 'Bitcoin',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsrUrtzFSk6AtyI4gvyVFjum9BqVixMQ7hw&usqp=CAU',
    symbol: 'USD',
    valueChange24: -9.54,
    valueUSD: 69.45,
}, {
    id: '3',
    name: 'Ethereum',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsrUrtzFSk6AtyI4gvyVFjum9BqVixMQ7hw&usqp=CAU',
    symbol: 'USD',
    valueChange24: 0.54,
    valueUSD: 69.45,
}, {
    id: '4',
    name: 'Virtual Dollars',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsrUrtzFSk6AtyI4gvyVFjum9BqVixMQ7hw&usqp=CAU',
    symbol: 'USD',
    valueChange24: -2.54,
    valueUSD: 69.45,
},
{
    id: '5',
    name: 'Bitcoin',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsrUrtzFSk6AtyI4gvyVFjum9BqVixMQ7hw&usqp=CAU',
    symbol: 'BTC',
    valueChange24: 6.54,
    valueUSD: 69.45,
}, {
    id: '6',
    name: 'Ethereum',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsrUrtzFSk6AtyI4gvyVFjum9BqVixMQ7hw&usqp=CAU',
    symbol: 'ETH',
    valueChange24: -0.54,
    valueUSD: 69.45,
}]

const MarketScreen = () => {
    return (
        <View style={styles.root}>
            <FlatList
                data={MarketCoins}
                renderItem={({ item }) => <MarketCoin MarketCoin={item} />}
                ListHeaderComponentStyle={{ alignItems: 'center' }}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image} />
                        <View style={styles.balanceContainer}>
                            <Text style={styles.label}>Market</Text>
                        </View>
                    </>
                )}
            />
        </View>
    )
}

export default MarketScreen
