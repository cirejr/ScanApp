import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./components/Login";
import Home from "./components/Home";
import Scan from "./components/Scan";


const globalScreenOptions = {
  headerStyle : {backgroundColor : '#112864'},
  headerTitle : {color : 'white'},
  headerTintColor : 'white',
}


const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions = {globalScreenOptions}
                         initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Scan" component={Scan} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});*/
