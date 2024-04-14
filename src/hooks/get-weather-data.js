import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';

export default function useGetWeatherData() {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lon, setLon] = useState([]);
  const [lat, setLat] = useState([]);
  const [weather, setWeather] = useState([]);

  async function fetchWeatherData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`,
      );

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setErrorMsg('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchWeatherData();
    })();
  }, [lat, lon]);

  return [loading, errorMsg, weather];
}
