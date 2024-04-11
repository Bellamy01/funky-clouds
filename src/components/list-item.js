import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { getDayFromTimestamp } from '../utilities/functions'

export default function ListItem(props) {
  const { dt, main } = props
  const { container, date, temp, icon, line } = styles
  return (
    <View style={container}>
      <Text style={date}>{getDayFromTimestamp(dt)}</Text>
      <FontAwesome size={28} name="sun-o" style={icon} />
      {/* <Text style={{ color: 'black', fontSize: 20 }}>{description}</Text> */}
      <Text style={temp}>{main.temp_min}°</Text>
      <View style={line} />
      <Text style={temp}>{main.temp_max}°</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  date: {
    color: 'black',
    fontSize: 22
  },
  icon: {
    color: '#EDF060'
  },
  temp: { color: 'black', fontSize: 18 },
  line: {
    width: 40,
    borderColor: 'black',
    borderWidth: 1,
    height: 0
  }
})
