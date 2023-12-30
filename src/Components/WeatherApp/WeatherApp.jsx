import './WeatherApp.css';
import { useState } from 'react';

// Importing imgs
import search_icon  from '../Assets/search.png'
import humidity_icon from '../Assets/humidity.png'
import wind_icon from '../Assets/wind.png'
import clear_Msky_icon from '../Assets/01d.png'
import clear_Nsky_icon from '../Assets/01n.png'
import few_Mclouds_icon from '../Assets/02d.png'
import few_Nclouds_icon from '../Assets/02n.png'
import scattered_Mclouds_icon from '../Assets/03d.png'
import scattered_Nclouds_icon from '../Assets/03n.png'
import broken_clouds_icon from '../Assets/04d.png'
import shower_rain_icon from '../Assets/09d.png'
import rain_icon from '../Assets/10d.png'
import thunderstorm_icon from '../Assets/11d.png'
import snow_icon from '../Assets/13d.png'
import mist_icon from '../Assets/50d.png'




 export const WeatherApp =()=>{
    let api_key = "fec6cd2b0e7f68d0e347757be293eba5"
    const [wicon,setWicon] = useState(clear_Msky_icon)
    
    const search = async()=>{
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value===""){
            return 0;
        }
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-speed");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + "km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp) + "°";
        location[0].innerHTML = data.name 

        if (data.weather[0].icon === "01d" ){
            return(wicon)
        } else if (data.weather[0].icon === "01n"){
            setWicon(clear_Nsky_icon)
        } else if (data.weather[0].icon === "02d"){
            setWicon(few_Mclouds_icon)
        }else if (data.weather[0].icon === "02n"){
            setWicon(few_Nclouds_icon)
        }else if (data.weather[0].icon === "03d"){
            setWicon(scattered_Mclouds_icon)
        }else if (data.weather[0].icon === "03n"){
            setWicon(scattered_Nclouds_icon)
        }else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWicon(broken_clouds_icon)
        }else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
        setWicon(shower_rain_icon)
        }else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWicon(rain_icon)
        }else if (data.weather[0].icon === "11d" || data.weather[0].icon === "11n"){
            setWicon(thunderstorm_icon)
        }else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setWicon(snow_icon)
        }else if (data.weather[0].icon === "50d" || data.weather[0].icon === "50n"){
            setWicon(mist_icon)
        }  
}
    return(
        <div className="container">
            <div className="top-bar">
                <input type="text" className='cityInput' placeholder='search' />
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="search" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" width="190x" />
            </div>
            <div className="weather-temp"> 24° </div>
            <div className="weather-location"> Rabat </div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent"> 64% </div>
                        <div className="text"> Humidity </div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-speed"> 18km/h </div>
                        <div className="text"> Wind Speed </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }