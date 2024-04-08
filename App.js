import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import CurrentWeather from './src/components/current-weather';
import UpcomingWeather from './src/components/upcoming-weather';

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      {/* <CurrentWeather/> */}
      <UpcomingWeather/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#d9d9',
  }
});
