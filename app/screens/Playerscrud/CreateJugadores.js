import React, { useState, useRef } from "react";
import { View, TextInput, ScrollView, Image, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Firebase from "../../utils/Firebase";
import Toast, { DURATION } from "react-native-easy-toast";
import { useNavigation } from "@react-navigation/native";

export default function CreateJugadores(props) {
  const navigation = useNavigation();

  const toastRef = useRef();

  const [state, setState] = useState({
    nombrecompleto: "",
    edad: "",
    telefono: "",
    pagorealizado: Boolean,
    importe: "",
  });

  const handleChangeText = (nombrecompleto, value) => {
    setState({ ...state, [nombrecompleto]: value });
  };

  const saveNewUser = async () => {
    if (state.nombrecompleto === "") {
      toastRef.current.show(
        "No agregó el nombre, la edad o el teléfono del jugador por favor agréguelo.",
        2000
      );
    } else {
      try {
        await Firebase.db.collection("jugadores").add({
          nombrecompleto: state.nombrecompleto,
          edad: state.edad,
          telefono: state.telefono,
          pagorealizado: state.pagorealizado,
          importe: state.importe,
        });
        navigation.navigate("listjugadores");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../../assets/img/ligapn.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.input}>
        <Toast
          ref={toastRef}
          style={{ backgroundColor: "#d7001a", borderRadius: 20 }}
          positionValue={270}
          position="top"
          opacity={0.9}
        />
        <TextInput
          style={styles.estiloinput}
          placeholder="Apellido y nombre"
          onChangeText={(value) => handleChangeText("nombrecompleto", value)}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.estiloinput}
          placeholder="Edad"
          keyboardType="numeric"
          onChangeText={(value) => handleChangeText("edad", value)}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.estiloinput}
          placeholder="Teléfono de contacto"
          keyboardType="numeric"
          onChangeText={(value) => handleChangeText("telefono", value)}
        />
      </View>
      <View>
        <Button
          title={"Guardar Jugador"}
          onPress={() => saveNewUser()}
          containerStyle={styles.botoncontainer}
          buttonStyle={styles.botonfondo}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  logo: {
    marginLeft: 120,
  },
  estiloinput: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    textAlign: "center",
  },
  input: {
    padding: 0,
    marginTop: 30,
    marginLeft: 50,
    marginBottom: 15,
    borderBottomColor: "#cccccc",
  },
  botoncontainer: {
    marginTop: 30,
    width: "45%",
    marginLeft: 120,
  },
  botonfondo: {
    backgroundColor: "#003BFF",
  },
});
