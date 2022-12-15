import React, { Fragment, useState,useContext } from 'react'
import Container from 'react-bootstrap/Container';
import { useDispatch} from 'react-redux';
import fetch_weather_data from '../redux/actions'
import styles from '../CSS_modules/weather.module.css'
import Context from '../Context/context'
function Search() {
    let { setShowDangerAlert}=useContext(Context)
    let [city, setCity] = useState("");
    let dispatch = useDispatch()
    let changeHandler = (e) => { setCity(e.target.value) }
    let submitHandler = (e) => {
        e.preventDefault();
        if (city === "") { 
            // to show danger alert
            setShowDangerAlert(true)
         }
        else {
            // to hide danger alert
             setShowDangerAlert (false)
            //  to fetch data
             dispatch(fetch_weather_data(city)); 
            //  to reset input search
             setCity("")  }}

    return (
        <Fragment>
            <div className={`${styles.weather_header}`}>
                <Container className={`h-100 d-flex align-items-center justify-content-center flex-column`}>
                    <h2>Enter your city then press search button</h2>
                    <form className={`mx-auto w-50 h-25`} onSubmit={(e) => { submitHandler(e) }}>
                        <input type="text" placeholder='Enter City name' className={`mb-2 w-100 d-block h-50 ps-3 `}
                            value={city} onChange={(e) => {changeHandler(e) }}/>
                        <button type="submit" className={`w-75  h-50 ${styles.search_btn}`}>Search</button>
                    </form>
                </Container>
            </div>
        </Fragment>)}

export default Search;
