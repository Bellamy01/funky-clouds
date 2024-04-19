import React from 'react'
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome6 } from '@expo/vector-icons'
import ListItem from '../components/list-item'

const imageLink = require('../../assets/swiss.jpg')

export default function UpcomingWeather({ weatherAPI }) {
  const cityName = weatherAPI.city.name
  const countryName = weatherAPI.city.country
  const weatherData = weatherAPI.list

  console.log(weatherAPI);

  const renderItem = ({ item }) => (
    <ListItem
      dt={item.dt}
      main={item.main}
      description={item.weather[0].main}
    />
  )

  const ItemSeparatorComponent = () => <View style={styles.separator} />

  const { image, container, wrapper, header } = styles

  return (
    <ImageBackground source={imageLink} resizeMode="cover" style={image}>
      <SafeAreaView style={container}>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Text style={styles.city}>{cityName}</Text>
          <Text style={styles.country}>{countryName}</Text>
        </View>
        <View style={wrapper}>
          <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
            <FontAwesome6 name="calendar-alt" size={13} color="black" />
            <Text style={header}>5-day forecast</Text>
          </View>
          <ItemSeparatorComponent />
          <FlatList
            keyExtractor={(item) => item.dt}
            data={weatherData}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparatorComponent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
      <StatusBar style="dark" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignContent: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 70,
    marginBottom: 100
  },
  wrapper: {
    width: '90%',
    gap: 3,
    marginVertical: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: 'lightblue',
    backfaceVisibility: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  separator: {
    width: '100%',
    marginVertical: 10,
    height: 0,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  header: {
    color: 'black',
    fontSize: 13,
    textTransform: 'uppercase',
  },
  city: {
    color: 'black',
    fontSize: 35,
  },
  country: {
    color: "black",
    fontSize: 16
  }
});
