import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Contact from './src/screens/Contact';
import AddContact from './src/screens/AddContact';
import Intro from './src/screens/intro';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="intro"
          component={Intro}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="AddContact" component={AddContact} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
