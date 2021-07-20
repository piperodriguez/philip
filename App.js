/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

/**
 * importamos nuestro primer
 */
import CoinsStack from './src/components/coins/CoinsStack';

/**
 * definimos la app
 * 1) agregamos el componente Navigaion container
 * 
 */
const App = () => {
  return (
    <NavigationContainer>
      <CoinsStack/>
    </NavigationContainer>
  );
}; 
export default App;
