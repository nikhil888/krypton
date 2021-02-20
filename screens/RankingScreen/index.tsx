import React from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import UserRankingItem from '../../components/UserRankingItem'
import styles from './styles';
const image = require('../../assets/images/Saly-20.png');

const MarketCoins = [{
    id: '1',
    name: 'Nikhil',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsrUrtzFSk6AtyI4gvyVFjum9BqVixMQ7hw&usqp=CAU',
    netWorth: 69.45,
},
{
    id: '2',
    name: 'Vasu',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsrUrtzFSk6AtyI4gvyVFjum9BqVixMQ7hw&usqp=CAU',
    netWorth: 69.45,
}, {
    id: '3',
    name: 'Vishu',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsrUrtzFSk6AtyI4gvyVFjum9BqVixMQ7hw&usqp=CAU',
    netWorth: 69.45,
}]

const RankingScreen = () => {
    return (
        <View style={styles.root}>
            <FlatList
                data={MarketCoins}
                renderItem={({ item,index }) => <UserRankingItem user={item} place={index + 1} />}
                ListHeaderComponentStyle={{ alignItems: 'center' }}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image} />
                        <Text style={styles.label}>Rankings</Text>
                    </>
                )}
            />
        </View>
    )
}

export default RankingScreen
