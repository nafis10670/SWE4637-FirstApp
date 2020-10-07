import React from "react";
import {Text, View, StyleSheet, FlatList } from "react-native";

const FacultyList = () => {
    const courses = [
        { name : "1. Mr. A" },
        { name : "2. Mr. B" },
        { name : "3. Mrs. E" },
        { name : "4. Miss. U" },
        { name : "5. Mrs. X" },
        { name : "6. Dr. Y" },
    ];

    return (
        <View>
            <Text style = {styles.header}>Available Faculty Members</Text>
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
        fontSize : 27,
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

export default FacultyList;