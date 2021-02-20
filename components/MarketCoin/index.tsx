import React from 'react'
import { View, Text, Image } from "react-native";
import styles from './styles';

export interface MarketCoinProps {
    MarketCoin: {
        image: string,
        name: string,
        symbol: string,
        valueChange24: number,
        valueUSD: number,
    }
}

const MarketCoin = (props: MarketCoinProps) => {
    const {
        MarketCoin: {
            image, name, symbol, valueChange24, valueUSD
        }

    } = props;
    return (
        <View style={styles.root}>
            <View style={styles.left}>
                <Image style={styles.image} source={{ uri: image }} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.value}>${valueUSD}</Text>
                <Text style={{ color: valueChange24 > 0 ? '#4bdb00': '#f10000' }}>
                    {valueChange24 > 0 && '+'}{valueChange24}
                    </Text>
            </View>
            </View>
        </View>

    )
}

export default MarketCoin
