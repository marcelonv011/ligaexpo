import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Badge, Button, ListItem, Icon, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Firebase from "../../utils/Firebase";
import TouchableScale from "react-native-touchable-scale";

export default function ListJugadores() {
  const navigation = useNavigation();

  const [jugadores, setJugadores] = useState([]);

  //busqueda
  const [searchText, setSearchText] = useState("");

  //no funciona busqueda

  useEffect(() => {
    if (searchText === "") {
      setJugadores(jugadores);
    } else {
      setJugadores(
        jugadores.filter((jugadores) => {
          if (jugadores.nombrecompleto.indexOf(searchText) > -1) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [searchText]);

  // ordenar alfabeticamente
  const handleOrderClick = () => {
    let newJugadores = [...jugadores];

    newJugadores.sort((a, b) =>
      a.nombrecompleto > b.nombrecompleto
        ? 1
        : b.nombrecompleto > a.nombrecompleto
        ? -1
        : 0
    );

    setJugadores(newJugadores);
  };

  // jugadores....

  useEffect(() => {
    Firebase.db.collection("jugadores").onSnapshot((querySnapshot) => {
      const jugadores = [];

      querySnapshot.docs.forEach((doc) => {
        const { nombrecompleto, edad, telefono } = doc.data();
        jugadores.push({
          id: doc.id,
          nombrecompleto,
          edad,
          telefono,
        });
      });

      setJugadores(jugadores);
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.searchArea}>
        <Button
          title={"Crear nuevo jugador"}
          containerStyle={styles.botoncontainer}
          buttonStyle={styles.botonfondo}
          onPress={() => navigation.navigate("createjugadores")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <TouchableOpacity onPress={handleOrderClick} style={styles.orderButton}>
          <Icon
            type="material-community"
            name="order-alphabetical-ascending"
            color="black"
            size={32}
          />
          <Text style={styles.textoorden}> Ordenar alfabeticamente</Text>
        </TouchableOpacity>
      </View>
      {jugadores.map((jugador) => {
        return (
          <ListItem
            data={jugador}
            key={jugador.id}
            Component={TouchableScale}
            bottomDivider
            containerStyle={{
              marginTop: 6,
            }}
            onPress={() => {
              navigation.navigate("detallesjugadores", {
                jugadorId: jugador.id,
              });
            }}
          >
            <ListItem.Chevron style={{ backgroundColor: "#003BFF" }} />
            <ListItem.Content>
              <ListItem.Title style={{ color: "#010000", fontWeight: "bold" }}>
                Nombre completo: {jugador.nombrecompleto}
              </ListItem.Title>
              <ListItem.Title>Edad: {jugador.edad}</ListItem.Title>
              <ListItem.Title>Teléfono: {jugador.telefono}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    marginTop: 100,
  },
  botoncontainer: {
    padding: 10,
    marginTop: 70,
    width: "45%",
    marginLeft: 120,
  },
  botonfondo: {
    backgroundColor: "#003BFF",
  },

  textoorden: {
    fontSize: 18,
    marginTop: -21,
    marginRight: -140,
    marginLeft: 75,
    fontWeight: "bold",
  },
});
