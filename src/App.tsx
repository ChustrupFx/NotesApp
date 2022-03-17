/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {ThemeProvider} from 'styled-components/native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as React from 'react';
import HomeScreen from './screen/HomeScreen/HomeScreen';
import CreateNoteScreen from './screen/CreateNoteScreen/CreateNoteScreen';

import themeCfg from './style/theme';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themeCfg}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">
          <Stack.Screen name="CreateNote" component={CreateNoteScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
