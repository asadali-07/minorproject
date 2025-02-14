import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import { useState } from'react'

const SearchBox = ({updateWeather}) => {
  const [city, setcity] = useState("")
  const [error, seterror] = useState(false)
  const API_KEY = "1f5c0cc65ce5b9f30e88a7396836c7b9" // Replace with your OpenWeatherMap API key
  
    const getWeather=async()=>{
          try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
          const data = await response.json()
       let result={
            city:city,
            temp: data.main.temp,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            feelLike: data.main.feels_like 
    }
    return result;
          }catch(err){
            throw err;
          }
  }

  const handleSubmit = async(e) => {
    try{
      e.preventDefault()
    setcity("")
    let newInfo=await getWeather()
    updateWeather(newInfo)
    }
    catch(err){
      console.error(err)
      seterror(true)
    }
  }
  
  const handleChange = (e) => {
    setcity(e.target.value)
  }
  return (
    <>
    <form className="flex">
    <TextField  onChange={handleChange} size="small"id="outlined-basic" label="City Name" variant="outlined" value={city} />
    <Button onClick={handleSubmit} variant="contained">Search</Button>
    {error && <Alert severity="error" >Error while fetching weather data or No such place in our api.Please try again!.</Alert>}
    </form>
    </>
  )
}

export default SearchBox