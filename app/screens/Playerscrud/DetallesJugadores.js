import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { Button } from "react-native-elements";
import Firebase from "../../utils/Firebase";
import Toast, { DURATION } from "react-native-easy-toast";
import Loading from "../../components/Loading";
import { useNavigation } from "@react-navigation/native";

export default function DetallesJugadores(props) {
  const initialState = {
    id: "",
    nombrecompleto: "",
    edad: "",
    telefono: "",
  };
  const [jugador, setJugador] = useState(initialState);

  const navigation = useNavigation();

  const toastRef = useRef();

  const [loading, setLoading] = useState(true);

  const getJugadorById = async (id) => {
    const dbRef = Firebase.db.collection("jugadores").doc(id);
    const doc = await dbRef.get();
    const jugador = doc.data();
    setJugador({
      ...jugador,
      id: doc.id,
    });
    setLoading(false);
  };

  useEffect(() => {
    getJugadorById(props.route.params.jugadorId);
  }, []);

  const handleChangeText = (nombrecompleto, value) => {
    setJugador({ ...jugador, [nombrecompleto]: value });
  };

  const deleteJugador = async () => {
    const dbRef = Firebase.db
      .collection("jugadores")
      .doc(props.route.params.jugadorId);
    await dbRef.delete();
    navigation.navigate("listjugadores");
  };

  const updateUser = async () => {
    const dbRef = Firebase.db.collection("jugadores").doc(jugador.id);
    await dbRef.set({
      nombrecompleto: jugador.nombrecompleto,
      edad: jugador.edad,
      telefono: jugador.telefono,
    });
    setJugador(initialState);
    navigation.navigate("listjugadores");
  };

  const alertaConfirmacionBorrar = () => {
    Alert.alert(
      "borrar el jugador",
      "¿Estás seguro que quieres borrar el jugador?",
      [
        { text: "SI", onPress: () => deleteJugador() },
        {
          text: "NO",
          onPress: () => toastRef.current.show("No borró el jugador", 3000),
        },
      ]
    );
  };

  if (loading) {
    return <Loading isVisible={loading} text="Cargando" />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.input}>
        <View style={styles.titulocontainer}>
          <Text style={styles.titulotext}> Apellido y nombre </Text>
        </View>
        <TextInput
          style={styles.estiloinput}
          placeholder="Apellido y nombre"
          value={jugador.nombrecompleto}
          onChangeText={(value) => handleChangeText("nombrecompleto", value)}
        />
      </View>
      <View style={styles.input}>
        <View style={styles.titulocontainer}>
          <Text style={styles.titulotext}> Edad </Text>
        </View>
        <TextInput
          style={styles.estiloinput}
          placeholder="Edad"
          value={jugador.edad}
          keyboardType="numeric"
          onChangeText={(value) => handleChangeText("edad", value)}
        />
      </View>
      <View style={styles.input}>
        <View style={styles.titulocontainer}>
          <Text style={styles.titulotext}> Teléfono </Text>
        </View>
        <TextInput
          style={styles.estiloinput}
          placeholder="Teléfono de contacto"
          value={jugador.telefono}
          keyboardType="numeric"
          onChangeText={(value) => handleChangeText("telefono", value)}
        />
      </View>
      <View>
        <Button
          title={"Actualizar Jugador"}
          onPress={() => updateUser()}
          containerStyle={styles.botoncontainer}
          buttonStyle={styles.botonfondoactualizar}
        />
      </View>
      <View>
        <Button
          title={"Borrar Jugador"}
          onPress={() => alertaConfirmacionBorrar()}
          containerStyle={styles.botoncontainer}
          buttonStyle={styles.botonfondoborrar}
        />
        <Toast
          ref={toastRef}
          style={{ backgroundColor: "#d7001a", borderRadius: 20 }}
          positionValue={70}
          position="top"
          opacity={0.9}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  titulotext: {
    fontSize: 20,
  },
  titulocontainer: {
    marginLeft: 10,
  },
  input: {
    padding: 0,
    marginTop: 30,
    marginLeft: 50,
    marginBottom: 15,
    borderBottomColor: "#cccccc",
  },
  estiloinput: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    textAlign: "center",
  },
  botoncontainer: {
    marginTop: 30,
    width: "45%",
    marginLeft: 120,
  },
  botonfondoactualizar: {
    backgroundColor: "#05a649",
  },
  botonfondoborrar: {
    backgroundColor: "#d7001a",
  },
});
