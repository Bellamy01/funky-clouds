import { StatusBar } from 'expo-status-bar';
import { FlatList, StatusBar as State, ImageBackground, Text, View, Dimensions } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const data = [
 {
    "coord": {
        "lon": 10.99,
        "lat": 44.34
    },
    "weather": [
        {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 298.48,
        "feels_like": 298.74,
        "temp_min": 297.56,
        "temp_max": 300.05,
        "pressure": 1015,
        "humidity": 64,
        "sea_level": 1015,
        "grnd_level": 933
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.62,
        "deg": 349,
        "gust": 1.18
    },
    "rain": {
        "1h": 3.16
    },
    "clouds": {
        "all": 100
    },
    "dt": 1661870592,
    "sys": {
        "type": 2,
        "id": 2075663,
        "country": "IT",
        "sunrise": 1661834187,
        "sunset": 1661882248
    },
    "timezone": 7200,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
    }   
]
export function Item(props) {
    const { dt, main, name, description } = props;
    return (
        <View style={styles.item}>
            <FontAwesome name="sun-o" size={82} color="#A31621" />
            <View style={styles.containerWrapper}>
                <Text style={styles.id}>{dt}</Text>
                <View>
                    <Text style={styles.info}>{name}</Text>
                    <Text style={styles.info}>{description}</Text>
                </View>
                <View style={styles.tempWrapper}>
                    <Text style={styles.temp}>{main.temp_min}</Text>
                    <Text style={styles.temp}>{main.temp_max}</Text>
                </View>
            </View>
        </View>
    )
}

export default function UpcomingWeather() {
    return (
        <View styles={styles.container}>
            <ImageBackground 
                resizeMode='cover' 
                source={require('../../assets/swiss.jpg')} 
                style={styles.image}>
                <View style={{ zIndex: 10 }}>
                    <Text style={styles.header}>Upcoming Weather</Text>
                    <FlatList keyExtractor={(item) => item.id} data={data} renderItem={({item}) => (
                        <Item 
                            dt={item.dt} 
                            main={item.main} 
                            name={item.name} 
                            description={item.weather[0].description} 
                            />
                    )} />
                </View>
            </ImageBackground>
            <StatusBar style="dark" />
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: '#d9d9',
        margin: State.currentHeight || 0
    },
    header: {
        color: 'red',
        fontSize: 30,
        textAlign: 'center'
    },
    id: {
        fontSize: 30,
    },
    item: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        margin: 20,
        borderRadius: 10,
        borderColor: "#A31621"
    },
    containerWrapper: {
        gap: 5,
        justifyContent: 'center'
    },
    info: {
        fontSize: 20
    },
    tempWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    temp: {
        color: '#A31621',
        fontSize: 20
    },
    image: {
        flex: 1,
        height: 900
    }
}