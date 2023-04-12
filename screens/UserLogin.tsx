import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Button';
import { defaultStyle } from '../styles/defaultStyle';
import Input from 'react-native-input-style';

const UserLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={[
        defaultStyle.container,
        defaultStyle.borderGreen,
        styles.container,
      ]}
    >
      <View style={[styles.formContainer, defaultStyle.borderBlack]}>
        <Input
          onlyEnglish
          id="name"
          label="Full Name"
          keyboardType="default"
          required
          errorText="Your name is invalid"
          onInputChange={(id, value) => setEmail(value)}
          initialValue={email}
          //   outlined
          borderColor="blue"
        />

        <Input
          id="password"
          label="password"
          keyboardType="default"
          secureTextEntry
          required
          //   submit={!isSignup && authHandler}
          minLength={6}
          maxLength={20}
          autoCapitalize="none"
          errorText="Your password is invalid"
          onInputChange={(id, value) => setPassword(value)}
          initialValue={password}
          outlined
          borderColor="blue"
        />
        <Button
          title="SIGN UP"
          handleOnPress={() => navigation.navigate('UserSignup')}
        />
        <Button
          title="FORGET"
          disable
          handleOnPress={() => navigation.navigate('ForgetPassword')}
        />
        <Text>FARAZ</Text>
      </View>
    </View>
  );
};

export default UserLogin;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  formContainer: {
    // justifyContent: 'center',
  },
  signInContainer: {},
});
