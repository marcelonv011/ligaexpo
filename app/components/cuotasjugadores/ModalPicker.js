import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const OPTIONS =
  [
  'Enero', 
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',  
  ];
  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;

  const ModalPicker = (props) => {

    const onPressItem = (option) => {
        props.changeModalVisibility(false)
        props.setData(option);
    }

  const option = OPTIONS.map((item, index) => {
    return (
        <TouchableOpacity
            style={styles.option}
            key={index}
            onPress={() => onPressItem(item)}
        >
            <Text style={styles.text}>
                {item}
            </Text>
        </TouchableOpacity>
    )
  })

 
  return (
    
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}
        >
            <View style={[styles.modal, {width: WIDTH - 250, height: HEIGHT/2}]}>
                <ScrollView>
                    <Text style={styles.cerrartouch}>CERRAR</Text>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    modal: {
        marginTop: -260,
        backgroundColor: "#003BFF",
        borderWidth: 3,
        borderColor: "black"
    },
    option: {
        alignItems: "flex-start",
        borderWidth: 1
    },
    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    cerrartouch: {
        fontSize: 15,
        textAlign: "center",
        color: "white",
        padding: 10,
        borderWidth: 1
    },
})

export {ModalPicker}