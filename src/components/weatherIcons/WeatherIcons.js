import React from 'react';
import './WeatherIcons.css';

export const SunShower = () => {
  return (
    <div className="weather-icon">
      <div className="cloud"></div>
      <div className="sun">
        <div className="rays"></div>
      </div>
      <div className="rain"></div>
    </div>
  )
}

export const ThunderStorm = () => {
  return (
    <div className="weather-icon">
      <div className="cloud"></div>
      <div className="lightning">
        <div className="bolt"></div>
        <div className="bolt"></div>
      </div>
    </div>
  )
}

export const Cloudy = () => {
  return (
    <div className="weather-icon">
      <div className="cloud"></div>
      <div className="cloud"></div>
    </div>
  )
}

export const Flurries = () => {
  return (
    <div className="weather-icon">
      <div className="cloud"></div>
      <div className="snow">
        <div className="flake"></div>
        <div className="flake"></div>
      </div>
    </div>
  )
}

export const Sunny = () => {
  return (
    <div className="weather-icon">
      <div className="sun">
        <div className="rays"></div>
      </div>
    </div>
  )
}

export const Rainy = () => {
  return (
    <div className="weather-icon">
      <div className="cloud"></div>
      <div className="rain"></div>
    </div>
  )
}

export const Hazy = () => {
  return (
    <div className="weather-icon">
      <div className="cloud"></div>
      <div className="haze"></div>
    </div>
  )
}



