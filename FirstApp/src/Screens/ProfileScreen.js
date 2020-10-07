import React from "react";
import { Text, StyleSheet, View, Image, Button, TouchableOpacity } from "react-native";

const ProfileScreen = () => {
    return (
        <View>
            <Image
                source = {require("../../assets/profilepic.jpg")}
                style = {{
                    height : 200,
                    width : 200,
                    alignSelf : "center",
                    top : 20,
                }}
            />
            <Text style = {styles.textStyle}>Name : Nafis Saami Azad</Text>
            <Text style = {styles.textStyle}>Student ID : 170042007</Text>
            <Text style = {styles.textStyle}>Room no : Non-resident</Text>
            <Text style = {styles.textStyle}>Email : nafissazad@gmail.com</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 22,
        fontWeight : "bold",
        textAlign : "center",
        top : 40,
    }
})

export default ProfileScreen;