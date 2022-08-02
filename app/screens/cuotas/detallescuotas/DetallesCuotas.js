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
import Firebase from "../../../utils/Firebase";
import Toast, { DURATION } from "react-native-easy-toast";
import Loading from "../../../components/Loading";
import { useNavigation } from "@react-navigation/native";

export default function DetallesCuotas(props) {
  const initialState = {
    id: "",
    nombrecompleto: "",
    pagorealizado: "",
    importe: "",
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

  const updateUser = async () => {
    const dbRef = Firebase.db.collection("jugadores").doc(jugador.id);
    await dbRef.set({
      pagorealizado: jugador.pagorealizado,
      importe: jugador.importe,
    });
    setJugador(initialState);
    navigation.navigate("enero");
  };

  if (loading) {
    return <Loading isVisible={loading} text="Cargando" />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.input}>
        <View style={styles.titulocontainer}>
          <Text style={styles.titulotext}> Apellido y nombre: </Text>
        </View>
        <Text style={styles.nombrejugador}>{jugador.nombrecompleto}</Text>
      </View>
      <View style={styles.input}>
        <View style={styles.titulocontainer}>
          <Text style={styles.titulotext}> Pago realizado: </Text>
        </View>
        <TextInput
          style={styles.estiloinput}
          placeholder="Pago realizado"
          value={jugador.pagorealizado}
          onChangeText={(value) => handleChangeText("pagorealizado", value)}
        />
      </View>
      <View style={styles.input}>
        <View style={styles.titulocontainer}>
          <Text style={styles.titulotext}> importe: </Text>
        </View>
        <TextInput
          style={styles.estiloinput}
          placeholder="importe"
          value={jugador.importe}
          keyboardType="numeric"
          onChangeText={(value) => handleChangeText("importe", value)}
        />
      </View>
      <View>
        <Button
          title={"Actualizar Cuota paga"}
          onPress={() => updateUser()}
          containerStyle={styles.botoncontainer}
          buttonStyle={styles.botonfondoactualizar}
        />
      </View>
      <View>
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
  nombrejugador: {
    fontSize: 25,
    marginLeft: 15,
  },
  titulotext: {
    fontSize: 20,
    fontWeight: "bold",
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
