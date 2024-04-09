import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function CurrentWeather() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Welcome, Dan bellamy</Text>
        <FontAwesome name="sun-o" size={64} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>Its t-shirt perfect weather</Text>
      </View>
      <StatusBar style='dark' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: '#000',
    fontSize: 48
  },
  feels: {
    color: '#000',
    fontSize: 30
  },
  highLow: {
    color: '#000',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row',
    gap: 10
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignContent: 'flex-start',
    padding: 30,
  },
  description: {
    fontSize: 48,
    color: "#000",
  },
  message: {
    fontSize: 30,
    color: "#000"
  }
});
