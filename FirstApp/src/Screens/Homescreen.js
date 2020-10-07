import React from "react";
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
    return (
        <View>
            <Image
                source = {require("../../assets/logo.png")}
                style = {{
                    resizeMode : "center",
                    width : 400,
                    height : 250,
                }}
                />

            <Text style = {styles.textStyle}>Department of CSE</Text>

            <Text style = {styles.textStyle}>Programme : SWE</Text>

            <TouchableOpacity
                onPress = { function () {
                    props.navigation.navigate("Profile");
                }}
            >
                <Text style = {styles.touchableButton}>My Profile</Text>
            </TouchableOpacity>

            <Button
                title = "Semester wise course list"
                onPress = {function () {
                    props.navigation.navigate("Semester");
                }}
            />

            <Text style = {{fontSize : 10}}></Text>

            <Button
                title = "List of faculty members"
                onPress = {function(){
                    props.navigation.navigate("Faculty");
                }}
                />

        </View>

    );
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 22,
        fontWeight : "bold",
        textAlign : "center",
        color : "#008b8b"
    },

    touchableButton : {
        fontSize : 30,
        textAlign : "center",
        color : "#00ffff",
        marginVertical : 18,
    }
});

export default HomeScreen;