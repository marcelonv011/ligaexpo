import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login";


const Stack = createNativeStackNavigator();


export default function LoginStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="login"
                component={Login}
                options={{ title: "Login", headerShown: false}}
                />
                <Stack.Screen 
                name="account"
                component={Account}
                options={{ title: "Mi cuenta", headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}