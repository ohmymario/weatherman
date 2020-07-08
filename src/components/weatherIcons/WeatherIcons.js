import React from 'react';
import './WeatherIcons.css';

export const SunShower = () => {
  return (
    <div class="weather-icon">
      <div class="cloud"></div>
      <div class="sun">
        <div class="rays"></div>
      </div>
      <div class="rain"></div>
    </div>
  )
}

export const ThunderStorm = () => {
  return (
    <div class="weather-icon">
      <div class="cloud"></div>
      <div class="lightning">
        <div class="bolt"></div>
        <div class="bolt"></div>
      </div>
    </div>
  )
}

export const Cloudy = () => {
  return (
    <div class="weather-icon">
      <div class="cloud"></div>
      <div class="cloud"></div>
    </div>
  )
}

export const Flurries = () => {
  return (
    <div class="weather-icon">
      <div class="cloud"></div>
      <div class="snow">
        <div class="flake"></div>
        <div class="flake"></div>
      </div>
    </div>
  )
}

export const Sunny = () => {
  return (
    <div class="weather-icon">
      <div class="sun">
        <div class="rays"></div>
      </div>
    </div>
  )
}

export const Rainy = () => {
  return (
    <div class="weather-icon">
      <div class="cloud"></div>
      <div class="rain"></div>
    </div>
  )
}



