import React, { Component }  from 'react';
import { View, Text } from 'react-native';

/**
 * vamos a crear una clase que extienda de component
 * para la creacion de la pantalla,
 * las clases siempre comienzan en mayuscula y deben tener el mismo nombre que el archivo.
 * 
 * render()
 * metodo super importante que retorna el componente
 * y lo exportamos
 */

class CoinsScreen extends Component {
    render(){
        return(
            <View>
                <Text>Pantalla principal de la app</Text>
            </View>
        );
    }
}

export default CoinsScreen;