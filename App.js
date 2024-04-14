import React from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/tabs';
import { useGetWeather } from './src/hooks/get-weather-data';
import ErrorItem from './src/components/error-item';

const App = () => {
  const [loading, error, weather] = useGetWeather();

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem errorMsg={error} />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
