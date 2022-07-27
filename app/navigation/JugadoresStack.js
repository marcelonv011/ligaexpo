import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListJugadores from '../screens/Playerscrud/ListJugadores';
import CreateJugadores from '../screens/Playerscrud/CreateJugadores';
import DetallesJugadores from '../screens/Playerscrud/DetallesJugadores';

const Stack = createNativeStackNavigator();

export default function JugadoresStack() {
  return (
    <Stack.Navigator>
           <Stack.Screen 
            name="listjugadores"
            component={ListJugadores}
            options={{ title: "Jugadores", headerShown: false }}
            />
            <Stack.Screen 
            name="createjugadores"
            component={CreateJugadores}
            options={{ title: "crear jugadores", headerShown: false }}
            />
            <Stack.Screen 
            name="detallesjugadores"
            component={DetallesJugadores}
            options={{ title: "Detalles de jugadores", headerShown: false }}
            />
    </Stack.Navigator>
  )
}