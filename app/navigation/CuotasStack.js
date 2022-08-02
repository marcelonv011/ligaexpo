import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cuotas from "../screens/cuotas/Cuotas";
import Enero from "../components/cuotasjugadores/meses/Enero";
import Febrero from "../components/cuotasjugadores/meses/Febrero";
import Marzo from "../components/cuotasjugadores/meses/Marzo";
import Abril from "../components/cuotasjugadores/meses/Abril";
import Mayo from "../components/cuotasjugadores/meses/Mayo";
import Junio from "../components/cuotasjugadores/meses/Junio";
import Julio from "../components/cuotasjugadores/meses/Julio";
import Agosto from "../components/cuotasjugadores/meses/Agosto";
import Septiembre from "../components/cuotasjugadores/meses/Septiembre";
import Octubre from "../components/cuotasjugadores/meses/Octubre";
import Noviembre from "../components/cuotasjugadores/meses/Noviembre";
import Diciembre from "../components/cuotasjugadores/meses/Diciembre";
import { Icon } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import DetallesCuotas from "../screens/cuotas/detallescuotas/DetallesCuotas";

const Stack = createNativeStackNavigator();

export default function CuotasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cuotas"
        component={Cuotas}
        options={{ title: "Cuotas", headerShown: false }}
      />
      <Stack.Screen
        name="enero"
        component={Enero}
        options={{
          headerBackVisible: false,
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <Icon
                type="material-community"
                name="white-balance-sunny"
                color="orange"
                size={25}
              />
              <Text style={styles.mes}>Enero</Text>
              <Icon
                type="material-community"
                name="white-balance-sunny"
                color="orange"
                size={25}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="febrero"
        component={Febrero}
        options={{
          headerBackVisible: false,
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <Icon
                type="material-community"
                name="white-balance-sunny"
                color="orange"
                size={25}
              />
              <Text style={styles.mes}>Febrero</Text>
              <Icon
                type="material-community"
                name="white-balance-sunny"
                color="orange"
                size={25}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="marzo"
        component={Marzo}
        options={{
          headerBackVisible: false,
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <Icon
                type="material-community"
                name="leaf"
                color="#86360a"
                size={25}
              />
              <Text style={styles.mesotoño}>Marzo</Text>
              <Icon
                type="material-community"
                name="leaf"
                color="#86360a"
                size={25}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="abril"
        component={Abril}
        options={{
          headerBackVisible: false,
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <Icon
                type="material-community"
                name="leaf"
                color="#86360a"
                size={25}
              />
              <Text style={styles.mesotoño}>Abril</Text>
              <Icon
                type="material-community"
                name="leaf"
                color="#86360a"
                size={25}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="mayo"
        component={Mayo}
        options={{
          headerBackVisible: false,
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <Icon
                type="material-community"
                name="leaf"
                color="#86360a"
                size={25}
              />
              <Text style={styles.mesotoño}>Mayo</Text>
              <Icon
                type="material-community"
                name="leaf"
                color="#86360a"
                size={25}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="junio"
        component={Junio}
        options={{
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: "#040f20",
          },
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <Icon
                type="material-community"
                name="snowflake"
                color="#e0f2f0"
                size={25}
              />
              <Text style={styles.mesinvierno}>Junio</Text>
              <Icon
                type="material-community"
                name="snowflake"
                color="#e0f2f0"
                size={25}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="julio"
        component={Julio}
        options={{
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: "#040f20",
          },
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <Icon
                type="material-community"
                name="snowflake"
                color="#e0f2f0"
                size={25}
              />
              <Text style={styles.mesinvierno}>Julio</Text>
              <Icon
                type="material-community"
                name="snowflake"
                color="#e0f2f0"
                size={25}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="agosto"
        component={Agosto}
        options={{
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: "#040f20",
          },
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <Icon
                type="material-community"
                name="snowflake"
                color="#e0f2f0"
                size={25}
              />
              <Text style={styles.mesinvierno}>Agosto</Text>
              <Icon
                type="material-community"
                name="snowflake"
                color="#e0f2f0"
                size={25}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="septiembre"
        component={Septiembre}
        options={{
          headerBackVisible: false,
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <Icon
                type="material-community"
                name="flower-tulip-outline"
                color="#af0103"
                size={25}
              />
              <Text style={styles.mesprimavera}>Septiembre</Text>
              <Icon
                type="material-community"
                name="flower-tulip-outline"
                color="#af0103"
                size={25}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="octubre"
        component={Octubre}
        options={{
          headerBackVisible: false,
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <Icon
                type="material-community"
                name="flower-tulip-outline"
                color="#af0103"
                size={25}
              />
              <Text style={styles.mesprimavera}>Octubre</Text>
              <Icon
                type="material-community"
                name="flower-tulip-outline"
                color="#af0103"
                size={25}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="noviembre"
        component={Noviembre}
        options={{
          headerBackVisible: false,
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <Icon
                type="material-community"
                name="flower-tulip-outline"
                color="#af0103"
                size={25}
              />
              <Text style={styles.mesprimavera}>Noviembre</Text>
              <Icon
                type="material-community"
                name="flower-tulip-outline"
                color="#af0103"
                size={25}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="diciembre"
        component={Diciembre}
        options={{
          headerBackVisible: false,
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <Icon
                type="material-community"
                name="white-balance-sunny"
                color="orange"
                size={25}
              />
              <Text style={styles.mes}>Diciembre</Text>
              <Icon
                type="material-community"
                name="white-balance-sunny"
                color="orange"
                size={25}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="detallescuotas"
        component={DetallesCuotas}
        options={{ title: "Detalles de cuotas", headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  mes: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#e9721b",
  },
  icono: {
    marginLeft: -20,
  },
  mesotoño: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#86360a",
  },
  mesinvierno: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#e0f2f0",
  },
  mesprimavera: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#af0103",
  },
});
