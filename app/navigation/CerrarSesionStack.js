import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cerrarsesion from "../screens/Account/CerrarSesion"

const Stack = createNativeStackNavigator();


export default function LoginStack(){
    return(
            <Stack.Navigator>
                <Stack.Screen 
                name="cerrarsesion"
                component={Cerrarsesion}
                options={{ title: "cerrar sesión", headerShown: false }}
                />
            </Stack.Navigator>
    );
}