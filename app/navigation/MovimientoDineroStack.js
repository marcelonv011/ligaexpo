import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovimientoDinero from '../screens/MovimientoDinero';

const Stack = createNativeStackNavigator();

export default function MovimientoDineroStack() {
  return (
    <Stack.Navigator>
            <Stack.Screen
            name="movimientodinero"
            component={MovimientoDinero}
            options={{ title: "movimiento de dinero" }}
            />
    </Stack.Navigator>
  )
}