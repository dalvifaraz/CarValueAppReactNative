import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import colors from '../utils/colors';

const Main = () => {
  const handlePress = () => {
    console.log('HELLO WORLD');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Primary"
        buttonContainerStyle={{ marginVertical: 8 }}
        handleOnPress={() => handlePress()}
      />
      <Button
        title="Seconday"
        buttonContainerStyle={{
          backgroundColor: colors.buttonSecondaryBackground,
          marginVertical: 8,
          borderColor: colors.textPrimary,
        }}
        titleStyle={{ color: colors.buttonSecondaryText }}
        handleOnPress={() => handlePress()}
      />
      <Button
        title="Error"
        buttonContainerStyle={{
          backgroundColor: colors.buttonErrorBackground,
          marginVertical: 8,
        }}
        titleStyle={{ color: colors.buttonErrorText }}
        handleOnPress={() => handlePress()}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});
