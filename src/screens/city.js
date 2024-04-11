import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar as State,
  View
} from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import IconText from '../components/icon-text'

const imageLink = require('../../assets/city.jpg')

export default function City() {
  const { image, container, city, country, cityText, wrapper, info } = styles
  return (
    <ImageBackground source={imageLink} style={image}>
      <View style={styles.overlay} />
      <SafeAreaView style={container}>
        <Text style={[city, cityText]}>London</Text>
        <Text style={[country, cityText]}>United Kingdom</Text>
        <View style={wrapper}>
          <Ionicons name="people" size={32} color="white" />
          <Text style={[cityText, info]}>50,000,000</Text>
        </View>
        <View style={wrapper}>
          <IconText iconName="sunrise" text="10:48" />
          <IconText iconName="sunset" text="17:50" />
        </View>
      </SafeAreaView>
      <StatusBar style='light' />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: State.currentHeight || 0,
    flexDirection: 'column',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  cityText: {
    color: 'white'
  },
  city: {
    fontSize: 50
  },
  country: {
    fontSize: 25
  },
  wrapper: { 
    flexDirection: 'row', 
    gap: 10, 
    alignItems: 'center' 
  },
  info: {
    fontSize: 20
  }
})
