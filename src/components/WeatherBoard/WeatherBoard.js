import React from 'react';
import './WeatherBoard.css';
import { img_url } from '../helpers/SearchOptionsApi';
import { useSelector } from 'react-redux';

const WeatherBoard = ({data}) => {
    const userRole = useSelector(state => state.user.role)
    const {sunrise, sunset} = data.sys

    const newSunriseValue = new Date(sunrise*1000)
    const newSunsetValue = new Date(sunset*1000)
    const iconCode = data.weather[0].icon

  return (
    <>
        <div className={`weather ${userRole === 'Farmer' ? 'weather-farmer-bg' : ''} ${userRole === 'traveler' ? 'weather-traveler' : ''}`}>
            <div className={`top-container ${userRole === 'traveler' ? 'traveler-content' : ''}`}>
                <p className='city'>{data.city}</p>
                <p className='weather-description'>{data.weather[0].description}</p>
                <img alt='weather-icon' className='weather-icon' src={`${img_url+ iconCode}.png`}/>
            </div>
            <div className={`bottom-container ${userRole === 'traveler' ? 'traveler-content' : ''}`}>
            <p className='temp'>Temperature: {Math.round(data.main.temp)}°C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels Like</span>
                        <span className='parameter-value'> {Math.round(data.main.feels_like)}°C </span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'> {data.wind.speed} m/s </span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'> {data.main.humidity} % </span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'> {data.main.pressure} hPa </span>
                    </div>
                    {
                        userRole === 'traveler' && 
                        (
                        <>
                        <div className='parameter-row'>
                            <span className='parameter-label'>SunRise</span>
                            <span className='parameter-value'> at {newSunriseValue.getHours()} AM</span>
                        </div>
                        <div className='parameter-row'>
                            <span className='parameter-label'>SunSet</span>
                            <span className='parameter-value'> at {newSunsetValue.getHours()} PM </span>
                        </div>
                        </>
                        )
                    }
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default WeatherBoard