
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

// Initialize Firebase



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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Stack = createNativeStackNavigator();
// const navigation = useNavigation();


function App(){
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    // useEffect(() => {
    //   setTimeout(() => {
        // firebase
        //   .auth()
        //   .signInWithEmailAndPassword("stojack.hannah@gmail.com", "test123")
        //   .then((user) => {
        //     setIsAuthenticated(true);
        //   })


      //   signInWithEmailAndPassword(auth, "stojack.hannah@gmail.com", "test123")
      // .then((user) => {
      //   console.log(user);
      //   setIsAuthenticated(true);
      // })
      //     .catch((e) => {
      //       console.error(e);
      //     });
      // }, 2000);
 
      useEffect(() => {
        setTimeout(() => {
          signInWithEmailAndPassword(auth, "<email>", "<password>")
          .then((user) => {
            console.log(user);
            setIsAuthenticated(true);
          })
          .catch((e) => {
            console.error(e);
          });
        }, 5000);
      }, []);

  const [loaded] = useFonts({
    "SF-Pro-Display-Bold": require("./assets/sfwin-master/SFPro/OpenType/SF-Pro-Display-Bold.otf"),
    "SF-Pro-Display-Heavy": require("./assets/sfwin-master/SFPro/OpenType/SF-Pro-Display-Heavy.otf"),
    "SF-Pro-Display-Medium": require("./assets/sfwin-master/SFPro/OpenType/SF-Pro-Display-Medium.otf")
})
  if (!loaded) {
    return null;
  }
  // export default function App() {
  //   
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
