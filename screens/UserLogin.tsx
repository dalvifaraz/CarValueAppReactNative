import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { defaultStyle } from '../styles/defaultStyle';
import colors from '../utils/colors';
import { fontStyle } from '../styles/fontStyle';

const UserLogin = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (email.length || password.length) {
      setError('');
    }
  }, [email, password]);

  const handleSignIn = () => {
    if (email.length && password.length) {
      if (email === 'admin' && password === 'admin') {
        navigation.navigate('Main');
      } else {
        setError('Email/Password Incorrect');
      }
    } else {
      setError('Email/Password Incorrect');
    }
  };

  const handleSignUp = () => {
    // navigation.navigate('ForgetPassword');
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
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
        <Text
          onPress={() => navigation.navigate('ForgetPassword')}
          style={[fontStyle.helperText, styles.forgetText]}
        >
          Forget Password?
        </Text>
        {error.length > 0 && (
          <Text style={[fontStyle.errorText, styles.error]}>{error}</Text>
        )}
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
  error: {
    marginVertical: 8,
    textAlign: 'center',
  },
  forgetText: {
    marginBottom: 8,
  },
});
