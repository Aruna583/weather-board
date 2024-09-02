export const GEO_OPTIONS_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geoOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'dda49f0df2mshb3642acbd73aac2p115c48jsn90936193c452',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const CURRENT_WEATHER_API = 'https://api.openweathermap.org/data/2.5/';

export const WEATHER_API_KEY = '3781f20e5dda973e6919b4b3b5a4b1c8';

export const HOUR_FORCAST_API_URL = "https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}";

export const img_url = "http://openweathermap.org/img/w/";


export const defaultData = {
    "city": "Yerevan AM",
    "coord": {
        "lon": 44.5144,
        "lat": 40.1814
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 33.05,
        "feels_like": 30.81,
        "temp_min": 33.05,
        "temp_max": 33.05,
        "pressure": 1007,
        "humidity": 17,
        "sea_level": 1007,
        "grnd_level": 902
    },
    "visibility": 10000,
    "wind": {
        "speed": 0,
        "deg": 0
    },
    "clouds": {
        "all": 1
    },
    "dt": 1725198417,
    "sys": {
        "type": 1,
        "id": 8851,
        "country": "AM",
        "sunrise": 1725157790,
        "sunset": 1725204864
    },
    "timezone": 14400,
    "id": 616052,
    "name": "Yerevan",
    "cod": 200
  }

export const defaultForecastData = {
    "city": {
        "id": 616052,
        "name": "Yerevan",
        "coord": {
            "lat": 40.1814,
            "lon": 44.5144
        },
        "country": "AM",
        "population": 1093485,
        "timezone": 14400,
        "sunrise": 1725157790,
        "sunset": 1725204864
    },
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1725202800,
            "main": {
                "temp": 33.05,
                "feels_like": 30.81,
                "temp_min": 29.67,
                "temp_max": 33.05,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 902,
                "humidity": 17,
                "temp_kf": 3.38
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 2.44,
                "deg": 53,
                "gust": 5.42
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-01 15:00:00"
        },
        {
            "dt": 1725213600,
            "main": {
                "temp": 30.14,
                "feels_like": 28.56,
                "temp_min": 24.32,
                "temp_max": 30.14,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 902,
                "humidity": 25,
                "temp_kf": 5.82
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 6.06,
                "deg": 35,
                "gust": 9.37
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-09-01 18:00:00"
        },
        {
            "dt": 1725224400,
            "main": {
                "temp": 26.06,
                "feels_like": 26.06,
                "temp_min": 22.57,
                "temp_max": 26.06,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 903,
                "humidity": 31,
                "temp_kf": 3.49
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.64,
                "deg": 32,
                "gust": 6.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-09-01 21:00:00"
        },
        {
            "dt": 1725235200,
            "main": {
                "temp": 21.09,
                "feels_like": 20.27,
                "temp_min": 21.09,
                "temp_max": 21.09,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 903,
                "humidity": 39,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.7,
                "deg": 29,
                "gust": 4.74
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-09-02 00:00:00"
        },
        {
            "dt": 1725246000,
            "main": {
                "temp": 20.52,
                "feels_like": 19.7,
                "temp_min": 20.52,
                "temp_max": 20.52,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 904,
                "humidity": 41,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.1,
                "deg": 32,
                "gust": 3.17
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-02 03:00:00"
        },
        {
            "dt": 1725256800,
            "main": {
                "temp": 27.65,
                "feels_like": 26.69,
                "temp_min": 27.65,
                "temp_max": 27.65,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 906,
                "humidity": 26,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.52,
                "deg": 247,
                "gust": 1.52
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-02 06:00:00"
        },
        {
            "dt": 1725267600,
            "main": {
                "temp": 32.14,
                "feels_like": 30.11,
                "temp_min": 32.14,
                "temp_max": 32.14,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 905,
                "humidity": 20,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.9,
                "deg": 199,
                "gust": 4.17
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-02 09:00:00"
        },
        {
            "dt": 1725278400,
            "main": {
                "temp": 34.77,
                "feels_like": 32.29,
                "temp_min": 34.77,
                "temp_max": 34.77,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 903,
                "humidity": 14,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.32,
                "deg": 169,
                "gust": 5.15
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-02 12:00:00"
        },
        {
            "dt": 1725289200,
            "main": {
                "temp": 31.45,
                "feels_like": 29.58,
                "temp_min": 31.45,
                "temp_max": 31.45,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 902,
                "humidity": 22,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.18,
                "deg": 55,
                "gust": 3.35
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-02 15:00:00"
        },
        {
            "dt": 1725300000,
            "main": {
                "temp": 25.39,
                "feels_like": 25.03,
                "temp_min": 25.39,
                "temp_max": 25.39,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 902,
                "humidity": 40,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.51,
                "deg": 35,
                "gust": 8.01
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-09-02 18:00:00"
        },
        {
            "dt": 1725310800,
            "main": {
                "temp": 23.58,
                "feels_like": 23.04,
                "temp_min": 23.58,
                "temp_max": 23.58,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 902,
                "humidity": 40,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.62,
                "deg": 31,
                "gust": 6.15
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-09-02 21:00:00"
        },
        {
            "dt": 1725321600,
            "main": {
                "temp": 21.81,
                "feels_like": 21.2,
                "temp_min": 21.81,
                "temp_max": 21.81,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 902,
                "humidity": 44,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.52,
                "deg": 31,
                "gust": 4.9
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-09-03 00:00:00"
        },
        {
            "dt": 1725332400,
            "main": {
                "temp": 21.01,
                "feels_like": 20.39,
                "temp_min": 21.01,
                "temp_max": 21.01,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 903,
                "humidity": 47,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.09,
                "deg": 36,
                "gust": 3.16
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-03 03:00:00"
        },
        {
            "dt": 1725343200,
            "main": {
                "temp": 28.15,
                "feels_like": 27.21,
                "temp_min": 28.15,
                "temp_max": 28.15,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 904,
                "humidity": 30,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.19,
                "deg": 226,
                "gust": 1.17
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-03 06:00:00"
        },
        {
            "dt": 1725354000,
            "main": {
                "temp": 33.02,
                "feels_like": 31.03,
                "temp_min": 33.02,
                "temp_max": 33.02,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 904,
                "humidity": 21,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.75,
                "deg": 208,
                "gust": 3
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-03 09:00:00"
        },
        {
            "dt": 1725364800,
            "main": {
                "temp": 35.04,
                "feels_like": 32.69,
                "temp_min": 35.04,
                "temp_max": 35.04,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 902,
                "humidity": 16,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.38,
                "deg": 185,
                "gust": 3.65
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-03 12:00:00"
        },
        {
            "dt": 1725375600,
            "main": {
                "temp": 31.61,
                "feels_like": 29.79,
                "temp_min": 31.61,
                "temp_max": 31.61,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 901,
                "humidity": 23,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.83,
                "deg": 54,
                "gust": 2.35
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-03 15:00:00"
        },
        {
            "dt": 1725386400,
            "main": {
                "temp": 26.06,
                "feels_like": 26.06,
                "temp_min": 26.06,
                "temp_max": 26.06,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 901,
                "humidity": 42,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.51,
                "deg": 36,
                "gust": 8.11
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-09-03 18:00:00"
        },
        {
            "dt": 1725397200,
            "main": {
                "temp": 24.04,
                "feels_like": 23.65,
                "temp_min": 24.04,
                "temp_max": 24.04,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 900,
                "humidity": 44,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.17,
                "deg": 29,
                "gust": 7.8
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-09-03 21:00:00"
        },
        {
            "dt": 1725408000,
            "main": {
                "temp": 21.99,
                "feels_like": 21.45,
                "temp_min": 21.99,
                "temp_max": 21.99,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 900,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.15,
                "deg": 26,
                "gust": 5.96
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-09-04 00:00:00"
        },
        {
            "dt": 1725418800,
            "main": {
                "temp": 21.23,
                "feels_like": 20.61,
                "temp_min": 21.23,
                "temp_max": 21.23,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 900,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.4,
                "deg": 36,
                "gust": 4.48
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-04 03:00:00"
        },
        {
            "dt": 1725429600,
            "main": {
                "temp": 28.46,
                "feels_like": 27.44,
                "temp_min": 28.46,
                "temp_max": 28.46,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 902,
                "humidity": 30,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.51,
                "deg": 188,
                "gust": 1.62
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-04 06:00:00"
        },
        {
            "dt": 1725440400,
            "main": {
                "temp": 32.85,
                "feels_like": 30.94,
                "temp_min": 32.85,
                "temp_max": 32.85,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 901,
                "humidity": 22,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.1,
                "deg": 201,
                "gust": 3.22
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-04 09:00:00"
        },
        {
            "dt": 1725451200,
            "main": {
                "temp": 34.98,
                "feels_like": 32.63,
                "temp_min": 34.98,
                "temp_max": 34.98,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 899,
                "humidity": 16,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.66,
                "deg": 199,
                "gust": 3.47
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-04 12:00:00"
        },
        {
            "dt": 1725462000,
            "main": {
                "temp": 30.99,
                "feels_like": 29.4,
                "temp_min": 30.99,
                "temp_max": 30.99,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 898,
                "humidity": 26,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.84,
                "deg": 54,
                "gust": 4.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-04 15:00:00"
        },
        {
            "dt": 1725472800,
            "main": {
                "temp": 25.44,
                "feels_like": 25.06,
                "temp_min": 25.44,
                "temp_max": 25.44,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 899,
                "humidity": 39,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 6.09,
                "deg": 33,
                "gust": 9.35
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-09-04 18:00:00"
        },
        {
            "dt": 1725483600,
            "main": {
                "temp": 23.03,
                "feels_like": 22.33,
                "temp_min": 23.03,
                "temp_max": 23.03,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 899,
                "humidity": 36,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 5
            },
            "wind": {
                "speed": 3.89,
                "deg": 14,
                "gust": 7.41
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-09-04 21:00:00"
        },
        {
            "dt": 1725494400,
            "main": {
                "temp": 21.33,
                "feels_like": 20.48,
                "temp_min": 21.33,
                "temp_max": 21.33,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 899,
                "humidity": 37,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 2.8,
                "deg": 29,
                "gust": 4.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-09-05 00:00:00"
        },
        {
            "dt": 1725505200,
            "main": {
                "temp": 20.6,
                "feels_like": 19.71,
                "temp_min": 20.6,
                "temp_max": 20.6,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 900,
                "humidity": 38,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.29,
                "deg": 35,
                "gust": 3.83
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-05 03:00:00"
        },
        {
            "dt": 1725516000,
            "main": {
                "temp": 27.45,
                "feels_like": 26.59,
                "temp_min": 27.45,
                "temp_max": 27.45,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 902,
                "humidity": 27,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.69,
                "deg": 199,
                "gust": 1.43
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-05 06:00:00"
        },
        {
            "dt": 1725526800,
            "main": {
                "temp": 31.74,
                "feels_like": 29.79,
                "temp_min": 31.74,
                "temp_max": 31.74,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 901,
                "humidity": 21,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.19,
                "deg": 200,
                "gust": 2.32
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-05 09:00:00"
        },
        {
            "dt": 1725537600,
            "main": {
                "temp": 33.59,
                "feels_like": 31.39,
                "temp_min": 33.59,
                "temp_max": 33.59,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 900,
                "humidity": 18,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.89,
                "deg": 183,
                "gust": 2.84
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-05 12:00:00"
        },
        {
            "dt": 1725548400,
            "main": {
                "temp": 29.89,
                "feels_like": 28.46,
                "temp_min": 29.89,
                "temp_max": 29.89,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 899,
                "humidity": 27,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.64,
                "deg": 55,
                "gust": 7.94
            },
            "visibility": 10000,
            "pop": 0.07,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-05 15:00:00"
        },
        {
            "dt": 1725559200,
            "main": {
                "temp": 24.78,
                "feels_like": 24.36,
                "temp_min": 24.78,
                "temp_max": 24.78,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 900,
                "humidity": 40,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 15
            },
            "wind": {
                "speed": 6.18,
                "deg": 43,
                "gust": 9.1
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-09-05 18:00:00"
        },
        {
            "dt": 1725570000,
            "main": {
                "temp": 22.15,
                "feels_like": 21.33,
                "temp_min": 22.15,
                "temp_max": 22.15,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 901,
                "humidity": 35,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 18
            },
            "wind": {
                "speed": 3.87,
                "deg": 31,
                "gust": 7.15
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-09-05 21:00:00"
        },
        {
            "dt": 1725580800,
            "main": {
                "temp": 20.57,
                "feels_like": 19.54,
                "temp_min": 20.57,
                "temp_max": 20.57,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 901,
                "humidity": 33,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 15
            },
            "wind": {
                "speed": 2.97,
                "deg": 40,
                "gust": 4.68
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-09-06 00:00:00"
        },
        {
            "dt": 1725591600,
            "main": {
                "temp": 19.47,
                "feels_like": 18.31,
                "temp_min": 19.47,
                "temp_max": 19.47,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 902,
                "humidity": 32,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 1.91,
                "deg": 39,
                "gust": 3.17
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-06 03:00:00"
        },
        {
            "dt": 1725602400,
            "main": {
                "temp": 25.68,
                "feels_like": 24.85,
                "temp_min": 25.68,
                "temp_max": 25.68,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 905,
                "humidity": 21,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 1.38,
                "deg": 186,
                "gust": 1.63
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-06 06:00:00"
        },
        {
            "dt": 1725613200,
            "main": {
                "temp": 29.98,
                "feels_like": 28.17,
                "temp_min": 29.98,
                "temp_max": 29.98,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 904,
                "humidity": 18,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.01,
                "deg": 191,
                "gust": 3.28
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-06 09:00:00"
        },
        {
            "dt": 1725624000,
            "main": {
                "temp": 32.06,
                "feels_like": 29.81,
                "temp_min": 32.06,
                "temp_max": 32.06,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 903,
                "humidity": 13,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.56,
                "deg": 146,
                "gust": 4.04
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-09-06 12:00:00"
        }
    ]
}


// https://rapidapi.com/wirefreethought/api/geodb-cities/playground/5978313be4b06b85e4b0da1e