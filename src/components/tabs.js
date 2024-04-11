import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import City from '../screens/city'
import CurrentWeather from '../screens/current-weather'
import UpcomingWeather from '../screens/upcoming-weather'
import { StyleSheet, View } from 'react-native'

const Tab = createBottomTabNavigator()

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Current"
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
        tabBarStyle: {
            paddingTop: 5,
            backgroundColor: 'lightblue'
        },
      }}
    >
      <Tab.Screen
        name="Current"
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? 'tomato' : 'grey'}
            />
          )
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="clockcircleo"
              size={24}
              color={focused ? 'tomato' : 'grey'}
            />
          )
        }}
      />
      {/* <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="city-variant-outline"
              size={24}
              color={focused ? 'tomato' : 'grey'}
            />
          )
        }}
      /> */}
    </Tab.Navigator>
  )
}
