import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { weatherType } from '../utilities/weather-type'

export default function CurrentWeather() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapper}>
        <Text style={styles.location}>Monaco</Text>
        <Text style={styles.condition}>88°</Text>
        <Text style={styles.description}>Partly Cloudy</Text>
        <View style={styles.tempWrapper}>
          <Text style={styles.highLow}>H:89°</Text>
          <Text style={styles.highLow}>L:89°</Text>
        </View>
      </View>
      <View style={styles.tipsWrapper}>
        <Text style={styles.tips}>
          Rainy conditions from 2PM-4PM, with mostly cloudy conditions expected
          at 3PM.
        </Text>
        <View style={styles.separator} />
        <Text style={styles.tips}>
          {weatherType['Thunderstorm'].message}
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
    fontSize: 20
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
