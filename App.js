import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/tabs'
import useGetWeatherData from './src/utilities/get-weather-data';

export default function App() {  
  const [loading, weather, errorMsg] = useGetWeatherData();
  console.log(loading, weather, errorMsg);

  if (weather && weather.visibility) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="lightblue" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center'
  }
})