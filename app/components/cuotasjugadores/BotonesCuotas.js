import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, Alert, Dimensions } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {ModalPicker} from './ModalPicker';

export default function BotonesCuotas() {

  const [chooseData, setchooseDate] = useState ("Mes");
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
  }

  const setData = (option) => {
    setchooseDate(option)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => changeModalVisibility(true)}
        style={styles.button}
      > 
        <Text style={styles.buttontext}> {chooseData}</Text>
      </TouchableOpacity>
      <Modal
        animationType='fade'
        transparent={true}
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker 
          changeModalVisibility={changeModalVisibility}
          setData={setData}
        />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "#003BFF",
        width: "110%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        shadowColor: "#FFFFFF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.87,
        elevation: 5,
        marginBottom: 10,
    },
    buttontext: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
});