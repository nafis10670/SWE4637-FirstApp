import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const SemesterScreen = (props) => {
    return (
        <View>
            <Button
                title = "1st Semester"
                onPress = {function () {
                    props.navigation.navigate("Course1");
                }}
            />

            <Text></Text>

            <Button
                title = "2nd Semester"
                onPress = {function () {
                    props.navigation.navigate("Course2");
                }} 
            />

            <Text></Text>

            <Button
                title = "3rd Semester"
                onPress = {function () {
                    props.navigation.navigate("Course3");
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    spaces : {
        fontSize : 20,
    }
})

export default SemesterScreen;