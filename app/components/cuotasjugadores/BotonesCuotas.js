import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BotonesCuotas() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.titmes}>Selecciona el mes</Text>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate("enero")}
      >
        <Text style={styles.buttontext}>Enero</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("febrero")}
      >
        <Text style={styles.buttontext}>Febrero</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("marzo")}
      >
        <Text style={styles.buttontext}>Marzo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("abril")}
      >
        <Text style={styles.buttontext}>Abril</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("mayo")}
      >
        <Text style={styles.buttontext}>Mayo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("junio")}
      >
        <Text style={styles.buttontext}>Junio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("julio")}
      >
        <Text style={styles.buttontext}>Julio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("agosto")}
      >
        <Text style={styles.buttontext}>Agosto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("septiembre")}
      >
        <Text style={styles.buttontext}>Septiembre</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("octubre")}
      >
        <Text style={styles.buttontext}>Octubre</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("noviembre")}
      >
        <Text style={styles.buttontext}>Noviembre</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("diciembre")}
      >
        <Text style={styles.buttontext}>Diciembre</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button1: {
    backgroundColor: "#003BFF",
    width: "60%",
    height: 50,
    marginTop: 15,
    marginLeft: 95,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    shadowColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.87,
    elevation: 5,
    marginBottom: 1,
  },
  button: {
    backgroundColor: "#003BFF",
    width: "60%",
    height: 50,
    marginTop: 0,
    marginLeft: 95,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    shadowColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.87,
    elevation: 5,
    marginBottom: 1,
  },
  buttontext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  titmes: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 135,
    marginTop: 30,
  },
});
