import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Login(){

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Bienvenue sur la page d'authentifcation</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        marginTop:50
    },
    bigBlue:{
        color:'blue',
        fontWeight:'bold',
        fontSize:30
    }
})

export {Login, styles}