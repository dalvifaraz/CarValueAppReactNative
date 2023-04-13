import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Button';
import { defaultStyle } from '../styles/defaultStyle';
import colors from '../utils/colors';
import { fontStyle } from '../styles/fontStyle';

const UserSignup = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
  });

  console.log(formData);

  return (
    <ScrollView contentContainerStyle={defaultStyle.container}>
      <View style={[styles.formContainer]}>
        <Text style={[fontStyle.pageHeader, styles.header]}>
          User Registration
        </Text>
        <Text style={[fontStyle.h2, styles.label]}>Email:</Text>
        <TextInput
          placeholder="enter email"
          style={styles.input}
          onChangeText={(value) => setFormData({ ...formData, email: value })}
          value={formData.email}
        />
        <Text style={[fontStyle.h2, styles.label]}>Password:</Text>
        <TextInput
          placeholder="enter password"
          style={styles.input}
          secureTextEntry
          onChangeText={(value) =>
            setFormData({ ...formData, password: value })
          }
          value={formData.password}
        />
        <Text style={[fontStyle.h2, styles.label]}>Confirm Password:</Text>
        <TextInput
          placeholder="enter confirm password"
          style={styles.input}
          secureTextEntry
          onChangeText={(value) =>
            setFormData({ ...formData, confirmPassword: value })
          }
          value={formData.confirmPassword}
        />
        <Text style={[fontStyle.h2, styles.label]}>Contact Number:</Text>
        <TextInput
          maxLength={10}
          placeholder="enter contact number"
          style={styles.input}
          onChangeText={(value) =>
            setFormData({ ...formData, contactNumber: value })
          }
          value={formData.contactNumber}
        />
        <Button
          title="Confirm"
          disable
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
