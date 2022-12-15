import React, { Fragment,useContext} from 'react'
import styles from '../CSS_modules/weather.module.css'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import AlertError from './AlertError'
import Alert from 'react-bootstrap/Alert';
import Context from '../Context/context'
import sunny from '../assets/sunny.jpg'
import rain from '../assets/rain.jpg'
import warm from '../assets/warm.jpg'
import snow from '../assets/snow.jpg'
import windy from '../assets/windy.jpg'
function Weather() {
    let weather_data = useSelector(state => { return state.data })
    let loading=useSelector(state => { return state.loading})
    let { showDangerAlert}=useContext(Context)
    return (
        <Fragment>
            {/*if loading equal true , then waiting user to enter value */}
            {/* else show the output of the entered value */}
            {loading?<div className=" d-flex align-items-center justify-content-center">Waiting until entering city name in search field......................... </div>:
            <div className={`${styles.weather_info}`}>
            {/* to check if the user entered value or not , if not value is given to input, then display danger alert else display output*/}
            {showDangerAlert ? <Alert variant='danger' className="text-center w-50 mx-auto">this input field is required</Alert>:(!weather_data.message?<Container className={`h-100 w-75 `}>
            {/*to check if the user enters valid city or not */}
            <h2 className={`text-center d-flex align-items-center justify-content-center h-25`}>{weather_data.name} {weather_data.sys.country}</h2>
            <div className={` ${styles.background} d-flex align-items-center justify-content-between h-75`}
            style={{
               'backgroundImage':(weather_data.main.temp  - 273.5).toFixed(2)>37?`url(${sunny})`:
               (weather_data.main.temp  - 273.5).toFixed(2)<37 && (weather_data.main.temp  - 273.5).toFixed(2)>20?`url(${warm})`:
               (weather_data.main.temp  - 273.5).toFixed(2)<20 && (weather_data.main.temp  - 273.5).toFixed(2)>10?`url(${rain})`:
               (weather_data.main.temp - 273.5).toFixed(2)<10?`url(${snow})`:
               `url(${windy})`
            }}
            >
            {/* display temperature */}
                <div className={`${styles.content} h-100 w-25`}>
                    <h2 className={`w-100 h-25 d-flex justify-content-center align-items-center `}>temp</h2>
                    <div className={`h-50 w-100`}>
                        <h3 className={`text-center`}>{weather_data.main.temp} K</h3>
                        <h3 className={`text-center`}>{(weather_data.main.temp * 1.8 - 459.67).toFixed(2)} &#8457;</h3>
                        <h3 className={`text-center`}>{(weather_data.main.temp - 273.15).toFixed(2)} &#8451;</h3> </div>
                </div>
            {/*display humidity */}
                <div className={`${styles.content} h-100 w-25`}>
                    <h2 className={`w-100 h-25 d-flex justify-content-center align-items-center`}>humidity</h2>
                    <div className={`h-50 w-100`}>
                        <h3 className={`text-center`}>{weather_data.main.humidity} </h3>
                    </div>
                </div>
            {/*display pressure */}
                <div className={`${styles.content} h-100 w-25`}>
                    <h2 className={`w-100 h-25 d-flex justify-content-center align-items-center`}>pressure</h2>
                    <div className={`h-50 w-100`}>
                        <h3 className={`text-center`}>{weather_data.main.pressure} </h3> 
                    </div>
                </div>
            {/*display wind speed */}
                <div className={`${styles.content} h-100 w-25`}>
                    <h2 className={`w-100 h-25 d-flex justify-content-center align-items-center`}>wind</h2>
                    <div className={`h-50 w-100`}>
                        <h3 className={`text-center`}>{weather_data.wind.speed} m/s </h3> 
                    </div>
                </div>
            </div>
        </Container>:<AlertError/>)}
        </div>}
        </Fragment>
    )
}

export default Weather