import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
/**
 * creacion del componenete
 */

const Stack = createStackNavigator();

/**
 * componente styles
 * eso le entendi al profe xdddd!
 * Aqui creamos la pantalla utilizando las propiedades del Stack navigator
 */

const CoinsStack = () => {
    return (
        <Stack.Navigator>
             <Stack.Screen name="Coins" component={CoinsScreen}/>
        </Stack.Navigator>
    );
}

/**
 * regla de oro exportar el componente
 */
export default CoinsStack;
 