import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemPanel,
    AccordionItemHeading,
    AccordionItemButton
} from 'react-accessible-accordion';
import './ForeCast.css';
import { img_url } from '../helpers/SearchOptionsApi';
import { BsClouds } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { SiSpeedypage } from "react-icons/si";
import { LuWind } from "react-icons/lu";
import { BsWater } from "react-icons/bs";
import { PiCloudSnow } from "react-icons/pi";

const WEEK_DAYS = ['Monday', 'TuesDay', 'Wednesday', 'Thursday', 'Friday', 'Saturday' , 'Sunday']

const ForeCast = ({data}) => {
    const dayinInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayinInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayinInAWeek))

  return (
    <>
        <label className='daily-title'>Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.slice(0,7).map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className='each-day-forecast-container'>
                                <img 
                                alt='small-icon' 
                                src={`${img_url+ item.weather[0].icon}.png`}
                                />
                                <label className='day'>{forecastDays[index]}</label>
                                <label className='description'>{item.weather[0].description}</label>
                                <label className='temp-min'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className='daily-details-grid-container'>
                            <div className='daily-details-grid-item'>
                                <label><SiSpeedypage/> Pressure</label>
                                <label>{item.main.pressure}hPa</label>
                            </div>
                            <div className='daily-details-grid-item'>
                                <label><WiHumidity /> Humidity</label>
                                <label>{item.main.humidity}%</label>
                            </div>
                            <div className='daily-details-grid-item'>
                                <label><BsClouds/> Clouds</label>
                                <label>{item.clouds?.all}%</label>
                            </div>
                            <div className='daily-details-grid-item'>
                                <label><LuWind /> Wind Speed</label>
                                <label>{item.wind.speed} m/s</label>
                            </div>
                            <div className='daily-details-grid-item'>
                                <label><BsWater /> Sea Level</label>
                                <label>{item.main.sea_level}m</label>
                            </div>
                            <div className='daily-details-grid-item'>
                                <label><PiCloudSnow /> Grand Level</label>
                                <label>{item.main.grnd_level}</label>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    </>
  )
}

export default ForeCast