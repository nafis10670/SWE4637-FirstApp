import React from "react";
import {Text, View, StyleSheet, FlatList } from "react-native";

const CourseList3 = () => {
    const courses = [
        { name : "1. SWE 4343" },
        { name : "2. CSE 4324" },
        { name : "3. MATH 4310" },
        { name : "4. HUM 4346" },
        { name : "5. SWE 4302" },
        { name : "6. SWE 4303" },
    ];

    return (
        <View>
            <Text style = {styles.header}>Third Semester</Text>
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

export default CourseList3;