'use strict';

const StationAnalytics = {
{
  getMinTemp(station)
  {
    let minTemp = null;
    if (station.readings.length > 0) {
      minTemp = = station.readings[0].temp;
      for (let i = 1; i < station.readings.length; i++) {
        if (station.reading[0].temp < minTemp.temp) {
          minTemp = station;
        }
      }
    }
  }
  return minTemp;

}
}

module.exports = StationAnalytics;