import React, { useEffect } from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import { Auth, Hub } from 'aws-amplify';
import styles from './styles';
import {useNavigation, CommonActions} from "@react-navigation/native";

const image =  require('../../assets/images/Saly-1.png');
const googleButtonImage =  require('../../assets/images/google-button.png');

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        console.log('user data')
        console.log(user);

        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'Root' },
            ],
          })
        );
      }
    }

    fetchUser();
  }, [])

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      if (event === "signIn") {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'Root' },
            ],
          })
        );
      }
    });
  }, [])

  const signInGoogle = async () => {
    await Auth.federatedSignIn({ provider: "Google" });
  }

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <Text style={styles.header1}>Welcome to VCrypto</Text>
      <Text style={styles.header2}>Invest your virtual $100.000 and compete with others</Text>

      <Pressable onPress={signInGoogle} style={styles.googleButton}>
        <Image style={styles.buttonImage} source={googleButtonImage} />
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;