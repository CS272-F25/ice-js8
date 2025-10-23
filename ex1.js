const dailyWeatherObjects = [
  {
    weekday: "sunday",
    temps: {
      F: 45,
    },
    conditions: "cloudy",
  },
  {
    weekday: "monday",
    temps: {
      F: 50,
    },
    conditions: "sunny",
  },
  {
    weekday: "tuesday",
    temps: {
      F: 53,
    },
    conditions: "sunny",
  },
  {
    weekday: "wednesday",
    temps: {
      F: 52,
    },
    conditions: "partly cloudy",
  },
  {
    weekday: "thursday",
    temps: {
      F: 48,
    },
    conditions: "cloudy",
  },
  {
    weekday: "friday",
    temps: {
      F: 42,
    },
    conditions: "sunny",
  },
  {
    weekday: "saturday",
    temps: {
      F: 40,
    },
    conditions: "partly cloudy",
  },
];

function convertFtoC(tempF) {
  return (tempF - 32) * (5 / 9);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateWeatherReport() {
  const forecastStrings = [];

  for (const dayWeather of dailyWeatherObjects) {
    const tempC = convertFtoC(dayWeather.temps.F);
    forecastStrings.push(
      `On ${capitalize(dayWeather.weekday)} it will be ${
        dayWeather.conditions
      } with a temperature of ${tempC.toFixed(1)} degrees C.`
    );
  }

  let maxTemp = -Infinity;
  let maxDay;

  for (const dayWeather of dailyWeatherObjects) {
    if (dayWeather.temps.F > maxTemp) {
      maxTemp = dayWeather.temps.F;
      maxDay = dayWeather.weekday;
    }
  }

  const maxTempString = `The warmest day will be ${capitalize(
    maxDay
  )} with a temperature of ${convertFtoC(maxTemp).toFixed(1)} degrees C.`;

  return forecastStrings.join("\n") + "\n" + maxTempString;
}

console.log(generateWeatherReport());
