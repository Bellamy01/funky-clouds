import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { weatherType } from '../utilities/weather-type'

export default function CurrentWeather({ weatherAPI }) {
  const cityData = weatherAPI.city
  const weatherData = weatherAPI.list[0]
  const { main: { temp, temp_min, temp_max, }, weather } = weatherData
  const description = weather[0].description
  const type = weather[0].main

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapper}>
        <Text style={styles.location}>{cityData.name}</Text>
        <Text style={styles.condition}>{Math.round(temp)}°</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.tempWrapper}>
          <Text style={styles.highLow}>H:{Math.round(temp_max)}°</Text>
          <Text style={styles.highLow}>L:{Math.round(temp_min)}°</Text>
        </View>
      </View>
      <View style={styles.tipsWrapper}>
        <Text style={styles.tips}>
          There will be {type}!
        </Text>
        <View style={styles.separator} />
        <Text style={styles.tips}>
          {weatherType[type].message}
        </Text>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    //backgroundColor: '#99DAEB'
  },
  mainWrapper: {
    alignItems: 'center',
    gap: 5
  },
  highLow: {
    color: 'black',
    fontSize: 18
  },
  condition: {
    color: 'black',
    fontSize: 70,
    fontWeight: '200'
  },
  tempWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 15
  },
  description: {
    color: 'black',
    fontSize: 20,
    textTransform: "capitalize"
  },
  location: {
    color: 'black',
    fontSize: 40
  },
  separator: {
    width: '100%',
    marginVertical: 10,
    height: 0,
    borderColor: 'black',
    borderWidth: 0.5,
    opacity: 0.6
  },
  tips: {
    color: 'black',
    fontSize: 15
  },
  tipsWrapper: {
    width: '90%',
    marginVertical: 60,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#99DAEB',
    borderWidth: 1
  }
})
