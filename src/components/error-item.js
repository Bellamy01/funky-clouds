import React from 'react'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

export default function ErrorItem({ errorMsg }) {
    console.log('Error', errorMsg);
    const { container, error } = styles
  return (
    <View style={container}>
        <Feather size={100} name='frown' color='tomato' />
        <Text styles={error}>Ooops! Something went wrong!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  error: {
    fontSize: 25,
    textAlign: 'center',
  },
});