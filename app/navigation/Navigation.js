import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-elements'
import JugadoresStack from "./JugadoresStack";
import CuotasStack from "./CuotasStack";
import MovimientoDineroStack from "./MovimientoDineroStack";
import CerrarSesionStack from "../screens/Account/CerrarSesion";

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        
            <Tab.Navigator 
            initialRouteName="jugadores-stack"
                screenOptions={({ route }) => ({
                    tabBarInactiveTintColor: "#000000",
                    tabBarActiveTintColor: "#003BFF",
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                })}
            >
                <Tab.Screen 
                name="jugadores-stack"
                component={JugadoresStack}
                options={{ title:"Jugadores", headerShown: false}}
                />
                <Tab.Screen 
                name="cuotas-stack"
                component={CuotasStack}
                options={{ title:"Cuotas", headerShown: false}}
                />
                <Tab.Screen 
                name="movimiento-stack"
                component={MovimientoDineroStack}
                options={{ title:"Movimiento de dinero", headerShown: false}}
                />
                <Tab.Screen 
                name="cerrarsesion-stack"
                component={CerrarSesionStack}
                options={{ title:"Cerrar Sesión", headerShown: false}}
                />
            </Tab.Navigator>
        
    );
}

function screenOptions(route, color){
    let iconName;

    switch (route.name) {
        case "jugadores-stack":
            iconName = "badge-account-horizontal-outline"
            break;   
        case "cuotas-stack":
            iconName = "account-cash"
            break;     
        case "movimiento-stack":
            iconName = "piggy-bank-outline"
            break;    
        case "cerrarsesion-stack":
            iconName = "logout"
            break;          
        default:
            break;
    }
    return(
        <Icon type="material-community" name={iconName} size={22} color={color} />
    )
}