import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import { Badge, Button, ListItem } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import Firebase from "../../utils/Firebase";
import TouchableScale from "react-native-touchable-scale"



export default function ListJugadores() {

  const navigation = useNavigation();

  const [jugadores, setJugadores] = useState([])

  useEffect(() => {
    Firebase.db.collection("jugadores").onSnapshot(querySnapshot => {
        const jugadores = [];

      querySnapshot.docs.forEach(doc => {
        const {nombrecompleto, edad, telefono} = doc.data()
        jugadores.push({
          id: doc.id,
          nombrecompleto,
          edad,
          telefono,
        })
      });

      setJugadores(jugadores)
    });
  }, []);

  return (
    <ScrollView>
      <Button 
      title={"Crear nuevo jugador"}
      containerStyle={styles.botoncontainer}
      buttonStyle={styles.botonfondo}
      onPress={() => navigation.navigate("createjugadores")}
      />

      {
        jugadores.map(jugador => {
          return (
            <ListItem 
              key={jugador.id}
              Component={TouchableScale}
              bottomDivider
              containerStyle = {{
                marginTop: 6,
              }}
              onPress={() => {
                navigation.navigate("detallesjugadores", {
                  jugadorId: jugador.id
                })
              }}
            >
              <ListItem.Chevron style={{backgroundColor: "#003BFF"}}/>
              <ListItem.Content >
                <ListItem.Title style={{ color: "#010000", fontWeight: 'bold'}}>Nombre completo: {jugador.nombrecompleto}</ListItem.Title>
                <ListItem.Title>Edad: {jugador.edad}</ListItem.Title>
                <ListItem.Title>Teléfono: {jugador.telefono}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  titulo: {
      marginTop: 100,
  },
  botoncontainer: {
    padding: 10,
    marginTop: 50,
    width: "45%",
    marginLeft: 120,
  },
botonfondo: {
   backgroundColor: "#003BFF",
  },
});