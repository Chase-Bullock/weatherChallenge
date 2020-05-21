/* eslint-disable prettier/prettier */
/* Weather API has n for night and d for day, seems like we are ignoring that as shown in the document example where a "day" icon is stated as 01n, instead it appears large display is day icon, small display is night icon, to mold the api returns to account
for this I created an array 0 for day icon, 1 for night icon, so it does not matter whether n or d is returned we get the correct icon for our purpose*/
export const weatherConditions = {
  '01n': [require('./Assets/art_clear.png'), require('./Assets/ic_clear.png')],
  '02n': [require('./Assets/art_light_clouds.png'), require('./Assets/ic_light_clouds.png')],
  '03n': [require('./Assets/art_clouds.png'), require('./Assets/ic_cloudy.png')],
  '04n': [require('./Assets/art_clouds.png'), require('./Assets/ic_cloudy.png')],
  '09n': [require('./Assets/art_light_rain.png'), require('./Assets/ic_light_rain.png')],
  '10n': [require('./Assets/art_rain.png'), require('./Assets/ic_rain.png')],
  '11n': [require('./Assets/art_storm.png'), require('./Assets/ic_storm.png')],
  '13n': [require('./Assets/art_snow.png'), require('./Assets/ic_snow.png')],
  '50n': [require('./Assets/art_fog.png'), require('./Assets/ic_fog.png')],
  '01d': [require('./Assets/art_clear.png'), require('./Assets/ic_clear.png')],
  '02d': [require('./Assets/art_light_clouds.png'), require('./Assets/ic_light_clouds.png')],
  '03d': [require('./Assets/art_clouds.png'), require('./Assets/ic_cloudy.png')],
  '04d': [require('./Assets/art_clouds.png'), require('./Assets/ic_cloudy.png')],
  '09d': [require('./Assets/art_light_rain.png'), require('./Assets/ic_light_rain.png')],
  '10d': [require('./Assets/art_rain.png'), require('./Assets/ic_rain.png')],
  '11d': [require('./Assets/art_storm.png'), require('./Assets/ic_storm.png')],
  '13d': [require('./Assets/art_snow.png'), require('./Assets/ic_snow.png')],
  '50d': [require('./Assets/art_fog.png'), require('./Assets/ic_fog.png')],
};