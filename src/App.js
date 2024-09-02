import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherBoard from './components/WeatherBoard/WeatherBoard';
import { CURRENT_WEATHER_API , WEATHER_API_KEY} from './components/helpers/SearchOptionsApi';
import ForeCast from './components/ForeCast/ForeCast';
import { defaultData, defaultForecastData } from './components/helpers/SearchOptionsApi';
import { RiLoader2Line } from "react-icons/ri";
import RoleSelector from './components/RoleSelector';

function App() {
const [currentWether, setCurrentWeather] = useState(defaultData);
const [forecast, setForecast] = useState(defaultForecastData);
const [loader, setLoader] = useState(false);


const handleOnSearchChange = async (searchData) =>{
  setLoader(true)
const [lat, long] = searchData.value.split(" ");
const currentWeatherFetch = await fetch(`${CURRENT_WEATHER_API}weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`);
const currentWeatherresponse = await currentWeatherFetch.json()
const forcastFetch = await fetch(`${CURRENT_WEATHER_API}forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`)
const forecastResponse = await forcastFetch.json()
setLoader(false)
setCurrentWeather({city: searchData.label, ...currentWeatherresponse})
setForecast({city: searchData.label, ...forecastResponse})
}

  
  return (
    <div className="dashboard-container">
      <SearchBar onSearchChangeData={handleOnSearchChange}/>
      <RoleSelector />
      <div className='dashboard-second-container'>
        {loader ? <div className='loading-container'>
          <RiLoader2Line className='loader-icon'/>
          </div>: 
        <>
        <div className='weather-container'>
        {currentWether && <WeatherBoard data={currentWether}/>}
        </div>
        <div className='forecast-container'>
        {forecast && <ForeCast data={forecast}/>}
        </div>
        </>
        }
      </div>
    </div>
  );
}

export default App;
