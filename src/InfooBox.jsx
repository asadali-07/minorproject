import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CardActionArea from '@mui/material/CardActionArea';
const InfooBox = ({weather}) => {
  const sunUrl="https://raw.githubusercontent.com/qknow/images/gh-pages/primary/primary-2-science/weather%20conditions/sunny-weather.jpg"
  const rainUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7u64yVowXlG2QkgdMGSwEV3WHinn5NJnVqA&s"
  const coldUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjxsovzG0bbwYeN1wzlA4P1ETSs4mjCChmA&s"
  return (
    <div className='flex'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={weather.humidity>80?rainUrl:weather.temp<15?coldUrl:sunUrl}
          alt="green iguana"
        />
        <CardContent>
          <div className='center'>
          <Typography gutterBottom variant="h5" component="div">
            <b>{weather.city}</b>{weather.humidity>80?<ThunderstormIcon/>:weather.temp<15?<AcUnitIcon/>:<WbSunnyIcon/>}
          </Typography>
          <Typography variant="body2" component="p">
            Temperature: {weather.temp}°C
          </Typography>
          <Typography variant="body2" component="p">
            Humidity: {weather.humidity}%
          </Typography>
        <Typography variant="body2" component="p">
            Min. Temperature: {weather.tempMin}°C
          </Typography>
          <Typography variant="body2" component="p">
            Max. Temperature: {weather.tempMax}°C
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{textAlign:"center"}}>
            The weather can be described as { weather.description.charAt(0).toUpperCase() + weather.description.slice(1)} and feel like {weather.feelLike}°C
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default InfooBox 