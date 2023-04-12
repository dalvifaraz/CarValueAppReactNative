import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { defaultStyle } from '../styles/defaultStyle';

const UserSignup = ({ navigation }) => {
  return (
    <View
      style={[defaultStyle.container, { borderColor: 'red', borderWidth: 1 }]}
    >
      <Text>UserSignup</Text>
      <Button
        title="SIGN IN"
        handleOnPress={() => navigation.navigate('UserLogin')}
      />
      <Button
        title="FORGET"
        handleOnPress={() => navigation.navigate('ForgetPassword')}
      />
    </View>
  );
};

export default UserSignup;

const styles = StyleSheet.create({});
