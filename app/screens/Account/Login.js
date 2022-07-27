import React, { useRef } from "react";
import { StyleSheet, View, Text, Image, ScrollView, StatusBar } from "react-native";
import Toast from "react-native-easy-toast";
import LoginForm from "../../components/login/LoginForm";


export default function Login() {
    const toastRef = useRef();
    return(
        <ScrollView>
            <StatusBar hidden />
            <Image 
                source={require("../../../assets/img/ligapn.png")}
                resizeMode="contain"
                style={styles.logo}
            />
           <View>
             <LoginForm toastRef={toastRef}/>
           </View> 
           <Toast 
                ref={toastRef}
                position="center"
                opacity={0.9}
            />
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 140,
        marginTop: 70,
    },
});