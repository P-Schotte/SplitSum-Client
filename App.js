
import React, { Component, useState, useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomNav from "./src/components/BottomNav.js";
import { MyContext } from "./src/components/context/index.js";
import { useNavigation } from '@react-navigation/native';
// import { initializeApp } from 'firebase/app';


//Screens
import HomeScreen from "./src/screens/HomeScreen";
import ExpensesScreen from "./src/screens/ExpensesScreen";
import GroupsScreen from "./src/screens/GroupsScreen";
import AccountScreen from "./src/screens/AccountScreen";
import CreateGroupScreen from "./src/screens/CreateGroupScreen";
import { GlobalProvider } from "./src/components/context/index.js";
import { useFonts } from 'expo-font';
const Tab = createBottomTabNavigator();


// const firebaseConfig = {
//   apiKey: 'api-key',
//   authDomain: 'project-id.firebaseapp.com',
//   databaseURL: 'https://project-id.firebaseio.com',
//   projectId: 'project-id',
//   storageBucket: 'project-id.appspot.com',
//   messagingSenderId: 'sender-id',
//   appId: 'app-id',
//   measurementId: 'G-measurement-id',
// };

// const app = initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();
// const navigation = useNavigation();


function App(){
  const [loaded] = useFonts({
    "SF-Pro-Display-Bold": require("./assets/sfwin-master/SFPro/OpenType/SF-Pro-Display-Bold.otf"),
    "SF-Pro-Display-Heavy": require("./assets/sfwin-master/SFPro/OpenType/SF-Pro-Display-Heavy.otf"),
    "SF-Pro-Display-Medium": require("./assets/sfwin-master/SFPro/OpenType/SF-Pro-Display-Medium.otf")
})
  if (!loaded) {
    return null;
  }
  // export default function App() {
  //   const [isAuthenticated, setIsAuthenticated] = useState(false);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       firebase
  //         .auth()
  //         .signInWithEmailAndPassword("stojack.hannah@gmail.com", "test123")
  //         .then((user) => {
  //           setIsAuthenticated(true);
  //         })
  //         .catch((e) => {
  //           console.log(e);
  //         });
  //     }, 2000);
  //   }, []);
  
    return (
      <>
      <GlobalProvider>

      <NavigationContainer >
        <BottomNav/>
      </NavigationContainer>
      </GlobalProvider>
   </> );
  }


export default App;
