export const getWeatherDay = (passedInDate = '') => {
  if(!passedInDate.getDay) {
  passedInDate = new Date(passedInDate * 1000);
  }
  const today = new Date()
  const tommorow = new Date(today.getTime() + 86400000)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  if (today.getDay() === passedInDate.getDay()) {
    return 'Today'
  }
  else if (tommorow.getDay() === passedInDate.getDay()) {
    return 'Tomorrow'
  } else {
    return days[passedInDate.getDay()]
  }
}

export const dateFormatter = (unixDate) => {
  var weatherDate = new Date(unixDate * 1000);
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var month = months[weatherDate.getMonth()];
  var date = weatherDate.getDate();

  var formattedDay = `${month.toString()} ${date.toString()}`
  return formattedDay;
}

export const tempFormatter = (temp) => {
  let tempString = temp.toString()
  var cutPoint = tempString.indexOf('.');
  temp = tempString.substring(0, cutPoint !== -1 ? cutPoint : tempString.length);

  return temp;
}


export const windFormatter = (wind) => {
  let windSpeedString = wind.speed.toString()
  var cutPoint = windSpeedString.indexOf('.');
  windSpeedString = windSpeedString.substring(0, cutPoint !== -1 ? cutPoint : windSpeedString.length);
  const direction = getDirection(wind.deg);
  return `${windSpeedString} km/h ${direction}`;
}

export const getDirection = (angle) => {
  var directions = ['N', 'NW', 'W', 'SW', 'S', 'SE', 'E', 'NE'];
  return directions[Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8];
}