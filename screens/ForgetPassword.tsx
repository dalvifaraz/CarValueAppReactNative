import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { defaultStyle } from '../styles/defaultStyle';

const ForgetPassword = ({ navigation }) => {
  return (
    <View
      style={[defaultStyle.container, { borderColor: 'red', borderWidth: 1 }]}
    >
      <Text>ForgetPassword</Text>
      <Button
        title="SIGN IN"
        handleOnPress={() => navigation.navigate('UserLogin')}
      />
      <Button
        title="SIGN UP"
        handleOnPress={() => navigation.navigate('UserSignup')}
      />
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
