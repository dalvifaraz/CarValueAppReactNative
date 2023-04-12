import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Button';
import { defaultStyle } from '../styles/defaultStyle';
import colors from '../utils/colors';
import { fontStyle } from '../styles/fontStyle';

const UserLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    navigation.navigate('UserSignup');
  };

  const handleSignUp = () => {
    navigation.navigate('ForgetPassword');
  };

  return (
    <View style={defaultStyle.container}>
      <View style={[styles.formContainer]}>
        <Text style={[fontStyle.pageHeader, styles.header]}>Sign In</Text>
        <Text style={[fontStyle.h2, styles.label]}>Email:</Text>
        <TextInput
          placeholder="enter email"
          style={styles.input}
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
        <Text style={[fontStyle.h2, styles.label]}>Password:</Text>
        <TextInput
          placeholder="enter password"
          style={styles.input}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
        <Text style={[fontStyle.helperText, { marginBottom: 8 }]}>
          Forget Password?
        </Text>
        <Button
          title="LOGIN"
          buttonContainerStyle={styles.buttonContainer}
          handleOnPress={handleSignIn}
        />
        <Button
          title="SIGNUP"
          buttonContainerStyle={styles.buttonContainer}
          handleOnPress={handleSignUp}
        />
        <Button
          title="SIGNIN - GOOGLE"
          buttonContainerStyle={styles.buttonContainer}
          handleOnPress={handleSignUp}
        />
        <Button
          title="SIGNIN - LINKEDIN"
          buttonContainerStyle={styles.buttonContainer}
          handleOnPress={handleSignUp}
        />
        <Button
          title="SIGNIN - FACEBOOK"
          buttonContainerStyle={styles.buttonContainer}
          handleOnPress={handleSignUp}
        />
      </View>
    </View>
  );
};

export default UserLogin;

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 32,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 16,
    borderWidth: 1,
  },
  input: {
    height: 40,
    marginBottom: 8,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  buttonContainer: {
    marginVertical: 8,
  },
  label: {
    color: colors.textPrimary,
    marginTop: 8,
  },
  header: {
    textAlign: 'center',
    marginTop: 8,
  },
});
