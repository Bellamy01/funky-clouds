import { SafeAreaView, StyleSheet } from 'react-native';
import CurrentWeather from './src/components/current-weather';
import UpcomingWeather from './src/components/upcoming-weather';

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      {/* <CurrentWeather/> */}
      <UpcomingWeather/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FEE1C7',
  }
});
