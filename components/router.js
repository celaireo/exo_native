
// // React Navigation v.5

// import React from 'react';
// import 'react-native-gesture-handler';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import home from './Home';
// import prevision from './Prevision';

// import CustomIcon from './CustomIcon.js';

// import { Dimensions } from "react-native";
// import Prevision from './Prevision';
// import Home from './Home';

// const Tab = createMaterialTopTabNavigator();

// export default function TabNavigator() {
//   return (
//     <Tab.Navigator
//     initialRouteName = 'appMeteo' // bug affichage pdnt chargement
//     swipeEnabled = {true} //swipe enable
//     tabBarOptions= {{
//         showLabel: true, //icons in label because maxsize of tabBarIcons is 25
//         showIcon: true,
//         indicatorStyle:{height: 0},
//         // pressColor: 'transparent', //Android >= 5.0 only
//         // pressOpacity: 0, //for iOS and Android < 5.0 only
//         style: {
//             paddingBottom: 24,
//             backgroundColor: 'transparent',
//             position: "absolute",
//             bottom: 0,
//             width: Dimensions.get('window').width
//         }
//     }}
//     >
//         <Tab.Screen 
//             name="appMeteo" 
//             component={Home} 
//             options={({ route }) => ({
//                 tabBarLabel: ({ focused }) => {
//                     let iconColor;

//                     if (route.name === 'appMeteo') {
//                     iconColor = focused
//                         ? '#99E2FC'
//                         : '#000000';
//                     } 

//                     return <CustomIcon name='spinner9' size={45} color={iconColor}/>;
//                 },
//                 tabBarAccessibilityLabel: 'spinner9',
//             })}
//         />
//         <Tab.Screen 
//             name="Previson" 
//             component={Prevision}
//             options={({ route }) => ({
//                 tabBarLabel: ({ focused }) => {
//                     let iconColor;

//                     if (route.name === 'Previson') {
//                     iconColor = focused
//                         ? '#99E2FC'
//                         : '#000000';
//                     } 

//                     return <CustomIcon name='calendar' size={45} color={iconColor}/>;
//                 },
//                 tabBarAccessibilityLabel: 'calendar',
//             })}
//         />
//     </Tab.Navigator>
//   );
// }
