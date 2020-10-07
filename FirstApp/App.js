import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/Screens/Homescreen";
import CourseList1 from "./src/Screens/CourseList1";
import CourseList2 from "./src/Screens/CourseList2";
import CourseList3 from "./src/Screens/CourseList3";
import FacultyList from "./src/Screens/FacultyList";
import SemesterScreen from "./src/Screens/SemestersScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName = "Home">
      <stack.Navigator>
        <stack.Screen name = "Home" component = {HomeScreen} />
        <stack.Screen name = "Course1" component = {CourseList1} />
        <stack.Screen name = "Course2" component = {CourseList2} />
        <stack.Screen name = "Course3" component = {CourseList3} />
        <stack.Screen name = "Faculty" component = {FacultyList} />
        <stack.Screen name = "Semester" component = {SemesterScreen} />
        <stack.Screen name = "Profile" component = {ProfileScreen} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
