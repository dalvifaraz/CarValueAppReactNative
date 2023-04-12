import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserLogin from './screens/UserLogin';
import UserSignup from './screens/UserSignup';
import ForgetPassword from './screens/ForgetPassword';
import Main from './screens/Main';
import { defaultStyle } from './styles/defaultStyle';
import 'react-native-gesture-handler';

export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="UserLogin" component={UserLogin} />
        <Stack.Screen name="UserSignup" component={UserSignup} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    );
  }

  return (
    <SafeAreaView style={defaultStyle.root}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
