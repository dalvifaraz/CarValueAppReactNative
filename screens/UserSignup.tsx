import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Button';
import { defaultStyle } from '../styles/defaultStyle';
import colors from '../utils/colors';
import { fontStyle } from '../styles/fontStyle';
import validator from 'validator';

const UserSignup = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
  });
  const [formError, setFormError] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
  });

  const handleEmailValidation = (value: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(value) === false) {
      setFormData({ ...formData, email: value });
      setFormError({ ...formError, email: 'Enter a valid email address' });
      return false;
    } else {
      setFormData({ ...formData, email: value });
      setFormError({ ...formError, email: '' });
      return true;
    }
  };

  const handlePassword = (value: string) => {
    console.log('hello', value);
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      console.log('hello 2 ', value);
      setFormData({ ...formData, password: value });
      setFormError({ ...formError, password: '' });
      return true;
    } else {
      console.log('hello 3', value);
      setFormData({ ...formData, password: value });
      setFormError({
        ...formError,
        password: 'Please enter a strong password',
      });
      return false;
    }
  };

  const handleConfirmPassword = (value: string) => {
    if (formData.password === value) {
      setFormData({ ...formData, confirmPassword: value });
      setFormError({
        ...formError,
        confirmPassword: '',
      });
      return true;
    } else {
      setFormData({ ...formData, confirmPassword: value });
      setFormError({
        ...formError,
        confirmPassword: 'confirm password should be same as password',
      });
      return false;
    }
  };

  const handleContactNumber = (value: string) => {
    if (value.length < 10) {
      setFormData({ ...formData, contactNumber: value });
      setFormError({
        ...formError,
        contactNumber: 'enter a valid contact detail',
      });
    } else {
      setFormData({ ...formData, contactNumber: value });
      setFormError({
        ...formError,
        contactNumber: '',
      });
    }
  };

  const handleConfirmDisable = () => {
    if (
      !formData.email ||
      formError.email ||
      !formData.password ||
      formError.password ||
      !formData.confirmPassword ||
      formError.confirmPassword ||
      !formData.contactNumber ||
      formError.contactNumber
    ) {
      return true;
    }
    return false;
  };

  return (
    <ScrollView contentContainerStyle={defaultStyle.container}>
      <View style={[styles.formContainer]}>
        <Text style={[fontStyle.pageHeader, styles.header]}>
          User Registration
        </Text>
        <Text style={[fontStyle.h2, styles.label]}>Email:</Text>
        <TextInput
          id="email"
          placeholder="enter email"
          style={styles.input}
          value={formData.email}
          keyboardType="email-address"
          onChangeText={(value) => handleEmailValidation(value)}
        />
        {formError.email.length > 0 && (
          <Text style={[fontStyle.errorText, styles.error]}>
            {formError.email}
          </Text>
        )}
        <Text style={[fontStyle.h2, styles.label]}>Password:</Text>
        <TextInput
          id="password"
          placeholder="enter password"
          style={styles.input}
          secureTextEntry
          value={formData.password}
          onChangeText={(value) => handlePassword(value)}
        />
        {formError.password.length > 0 && (
          <Text style={[fontStyle.errorText, styles.error]}>
            {formError.password}
          </Text>
        )}
        <Text style={[fontStyle.h2, styles.label]}>Confirm Password:</Text>
        <TextInput
          id="confirmpassword"
          placeholder="enter confirm password"
          style={styles.input}
          secureTextEntry
          value={formData.confirmPassword}
          onChangeText={(value) => handleConfirmPassword(value)}
        />
        {formError.confirmPassword.length > 0 && (
          <Text style={[fontStyle.errorText, styles.error]}>
            {formError.confirmPassword}
          </Text>
        )}
        <Text style={[fontStyle.h2, styles.label]}>Contact Number:</Text>
        <TextInput
          id="contactnumber"
          maxLength={10}
          placeholder="enter contact number"
          keyboardType="number-pad"
          style={styles.input}
          value={formData.contactNumber}
          onChangeText={(value) => handleContactNumber(value)}
        />
        {formError.contactNumber.length > 0 && (
          <Text style={[fontStyle.errorText, styles.error]}>
            {formError.contactNumber}
          </Text>
        )}
        <Button
          title="Confirm"
          disable={handleConfirmDisable()}
          buttonContainerStyle={styles.buttonContainer}
          handleOnPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export default UserSignup;

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
