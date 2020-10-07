import React from "react";
import {Text, View, StyleSheet, FlatList } from "react-native";

const CourseList2 = () => {
    const courses = [
        { name : "1. SWE 4203" },
        { name : "2. EEE 4202" },
        { name : "3. MATH 4206" },
        { name : "4. CSE 4246" },
        { name : "5. HUM 4201" },
        { name : "6. CSE 4211" },
    ];

    return (
        <View>
            <Text style = {styles.header}>Second Semester</Text>
            <FlatList
                style = {styles.listStyle}
                data = {courses}
                renderItem = {function ({ item }) {
                    return (<Text style = {styles.textStyle}>{item.name}</Text>);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        fontSize : 30,
        textAlign : "center",
        marginTop : 13,
        marginBottom : 70,
        fontWeight : "bold",
        color : "slategray" 
    },
    
    textStyle : {
        fontSize : 20,
        marginHorizontal : 12,
        marginBottom : 12,
        color : "darkred"
    },

    viewStyle : {},

    listStyle : {

    },
})

export default CourseList2;