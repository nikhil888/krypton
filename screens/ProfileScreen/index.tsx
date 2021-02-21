import React, { useState } from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
const image =  require('../../assets/images/Saly-16.png');

const ProfileScreen = () => {
  const [user, setUser] = useState({
    id: '1',
    name: "Nikhil",
    email: 'dasdas@bgaf.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsrUrtzFSk6AtyI4gvyVFjum9BqVixMQ7hw&usqp=CAU',
    netWorth: 12312,
  })

  const signOut = () => {
    console.warn("Sign out");
  }

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />

      <View style={styles.userContainer}>
        <View style={styles.left}>
          <Image style={styles.userImage} source={{ uri: user.image}} />
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.value}>${user.netWorth}</Text>
        </View>
      </View>

      <Pressable onPress={signOut} style={{marginTop: 'auto'}}>
        <Text style={styles.buttonText}>Sign out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;