import ReactWeather, { useVisualCrossing } from 'react-open-weather';
import styles from './WeatherCard.module.css'
import { useEffect, useState } from 'react';
import SpinnerComp from '../Spinner/Spinner';



const WeatherCard = () => {

  const [spinner, setSpinner] = useState(true);
  const [currentT, setcurrentT] = useState({})

 

    const { data, isLoading, errorMessage } = useVisualCrossing({
      key: '5447X7RZARTYM8SUZL9XXNM99',
      lat: '41.765339',
      lon: '26.203341',
      lang: 'en',
      unit: 'metric', 
    });

    useEffect(()=> {

      console.log(data);
     if(data) {
      setSpinner(false)
      setcurrentT( data.current.temperature.current)
  
     }
    },[data])

    const customStyles = {
        fontFamily:  'Helvetica, sans-serif',
        gradientStart:  '#2c3e50',
        gradientMid:  '#858e96',
        gradientEnd:  '#2c3e50',
        locationFontColor:  '#c61b2b',
        todayTempFontColor:  '#c61b2b',
        todayDateFontColor:  '#B5DEF4',
        todayRangeFontColor:  '#B5DEF4',
        todayDescFontColor:  '#B5DEF4',
        todayInfoFontColor:  '#B5DEF4',
        todayIconColor:  '#c61b2b',
        forecastBackgroundColor:  '#FFF',
        forecastSeparatorColor:  '#DDD',
        forecastDateColor:  '#777',
        forecastDescColor:  '#777',
        forecastRangeColor:  '#777',
        forecastIconColor:  '#2c3e50',
    };

  
    return (

        <div className={styles['weather-container']}>
          {spinner && <SpinnerComp/>}
        {!spinner && (
          <>
        {Number(currentT) < 20 ? <h2>The weather is not conducive for outdoor concerts. :(</h2>:
        <h2>The weather outside is fantastic for concerts. Enjoy it to the fullest!</h2>  }

        <ReactWeather
     
            theme={customStyles}
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Svilengrad"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
        />
        </>
        )}
           </div>
      );

}

export default WeatherCard