import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Firebase from "../../../utils/Firebase";
import { Badge, Button, ListItem, Icon } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";

export default function Enero() {
  const navigation = useNavigation();

  const [jugadores, setJugadores] = useState([]);
  const [cuotas, setCuotas] = useState([]);

  useEffect(() => {
    Firebase.db.collection("jugadores").onSnapshot((querySnapshot) => {
      const jugadores = [];

      querySnapshot.docs.forEach((doc) => {
        const { nombrecompleto, pagorealizado, importe } = doc.data();
        jugadores.push({
          id: doc.id,
          nombrecompleto,
          pagorealizado,
          importe,
        });
      });

      setJugadores(jugadores);
    });
  }, []);

  return (
    <ScrollView>
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
              navigation.navigate("detallescuotas", {
                jugadorId: jugador.id,
              });
            }}
          >
            <ListItem.Chevron style={{ backgroundColor: "#003BFF" }} />
            <ListItem.Content>
              <ListItem.Title style={{ color: "#010000", fontWeight: "bold" }}>
                Nombre completo: {jugador.nombrecompleto}
              </ListItem.Title>
              <ListItem.Title>
                Pago realizado: {jugador.pagorealizado}
              </ListItem.Title>
              <ListItem.Title>Importe: {jugador.importe}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
}
