import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { getDayFromTimestamp } from '../utilities/functions'
import { weatherType } from '../utilities/weather-type'

export default function ListItem(props) {
  const { dt, main: { temp_max, temp_min }, description } = props
  const { container, date, temp, icon, line } = styles
  return (
    <View style={container}>
      <Text style={date}>{getDayFromTimestamp(dt)}</Text>
      <FontAwesome size={24} name={weatherType[description].icon} style={icon} />
      {/* <Text style={{ color: 'black', fontSize: 20 }}>{description}</Text> */}
      <Text style={temp}>{Math.round(temp_min)}°</Text>
      <View style={line} />
      <Text style={temp}>{Math.round(temp_max)}°</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  date: {
    color: 'black',
    fontSize: 22,
    flex: 1.3
  },
  icon: {
    color: '#EDF060',
    flex: 1
  },
  temp: { color: 'black', fontSize: 18, flex: 1.2, textAlign: 'center' },
  line: {
    borderColor: 'black',
    borderWidth: 1,
    height: 0,
    flex: 1
  }
})
