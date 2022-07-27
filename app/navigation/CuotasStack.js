import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cuotas from '../screens/cuotas/Cuotas';

const Stack = createNativeStackNavigator();

export default function CuotasStack() {
  return (
    <Stack.Navigator>
            <Stack.Screen
            name="cuotas"
            component={Cuotas}
            options={{ title: "Cuotas", headerShown: false }}
            />
    </Stack.Navigator>
  )
}