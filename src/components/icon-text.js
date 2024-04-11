import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function IconText({ iconName, text }) {
  const { cityText, wrapper, info } = styles
  return (
    <View style={wrapper}>
      <Feather name={iconName} size={32} color="white" />
      <Text style={[cityText, info]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cityText: {
    color: 'white'
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