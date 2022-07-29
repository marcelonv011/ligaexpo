import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";

export default function CerrarSesion() {
  return (
    <View>
      <Button
        title="Cerrar sesión"
        onPress={() => firebase.auth().signOut()}
        containerStyle={styles.logout}
        buttonStyle={styles.botonlogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logout: {
    marginTop: 350,
    marginLeft: 120,
    width: "45%",
  },
  botonlogin: {
    backgroundColor: "#003BFF",
  },
});
