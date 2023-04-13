import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import colors from '../utils/colors';

const Main = ({ navigation }) => {
  const [login, setLogin] = React.useState(true);

  const hasUnsavedChanges = Boolean(login);

  const handlePress = () => {
    console.log('HELLO WORLD');
  };

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        const action = e.data.action;
        if (!hasUnsavedChanges) {
          return;
        }

        e.preventDefault();

        Alert.alert(
          'Confirmation?',
          'Are you sure you need to signout and leave the screen?',
          [
            {
              text: 'Sign Out',
              style: 'destructive',
              onPress: () => navigation.dispatch(action),
            },
            { text: 'Cancel', style: 'cancel', onPress: () => {} },
          ]
        );
      }),
    [hasUnsavedChanges, navigation]
  );

  const handleSignOut = () => {};

  return (
    <View style={styles.container}>
      <Button
        title="SIGN OUT (PRIMARY)"
        buttonContainerStyle={{ marginVertical: 8 }}
        handleOnPress={() => navigation.navigate('UserLogin')}
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
