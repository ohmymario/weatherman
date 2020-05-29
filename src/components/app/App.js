import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Header from '../header/Header';
import CurrentWeather from '../currentWeather/CurrentWeather';


function App() {

  const [ location, setLocation ] = useState('Fresno');
  const [ currentWeatherData, setCurrentWeatherData ] = useState();
  const [ weeklyWeatherData, setWeeklyWeatherData ] = useState();

  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();

    var AmOrPm = a.getHours() >= 12 ? 'PM' : 'AM';
    var hour = (a.getHours() % 12) || 12;
    var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
    var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();

    var time = `${month} ${date}, ${year} ${hour}:${min} ${AmOrPm}`
    return time;
  }

  // Daily / Weekly Data
  useEffect(() => {
    const fetchDailyData = async () => {

      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`);
      const data = await res.json();

      const { lat, lon } = data.coord;
      const resOneCall = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current&units=imperial&appid=${process.env.REACT_APP_API_KEY}`);
      const resOneCallData = await resOneCall.json();

      setCurrentWeatherData(data);
      setWeeklyWeatherData(resOneCallData);

      // Change Location to api name
      setLocation(data.name)


      console.log(`current`);
      console.log(data);


      console.log(`resOneCallData`);
      console.log(resOneCallData);

    }

    fetchDailyData();

  }, [location]);

  // Check for current data
  useEffect(() => {
    if(setCurrentWeatherData) {
      const weather = setCurrentWeatherData.main;
      const time = timeConverter(setCurrentWeatherData.dt)

    }
  }, [setCurrentWeatherData])

  // SET LOADING FOR THE COMPONENTS WHILE THE DATA IS BEING FETCHED

  return (
    <div>
      <Header location={location}  setLocation={setLocation} />
      <CurrentWeather currentWeatherData={currentWeatherData}/>
    </div>
  );
}

export default App;
