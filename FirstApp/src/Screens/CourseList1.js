import React from "react";
import {Text, View, StyleSheet, FlatList } from "react-native";

const CourseList1 = () => {
    const courses = [
        { name : "1. SWE 4103" },
        { name : "2. CSE 4104" },
        { name : "3. MATH 4105" },
        { name : "4. EEE 4106" },
        { name : "5. EEE 4107" },
        { name : "6. CSE 4109" },
    ];

    return (
        <View>
            <Text style = {styles.header}>First Semester</Text>
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

export default CourseList1;