import { useState } from "react"
import Card from '@mui/material/Card';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./InfoBox.css"

export default function InfoBox({info}){

  const INIT_URL="https://plus.unsplash.com/premium_photo-1665772801439-3d52992b22e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL="https://images.unsplash.com/photo-1586902197503-e71026292412?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL="https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAINY_URL="https://images.unsplash.com/photo-1511634829096-045a111727eb?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
    // let info = {
    //     city: "Delhi",
    //     feelsLike: 24.84,
    //     humidity: 25.05,
    //     temp:25.05 ,
    //     tempMax: 25.05,
    //     tempMin: 25.05,
    //     weather: "haze",

    // } ;
    return (
        <div className="infobox">
            
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ?RAIN_URL : info.temp > 15 ? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {info.temp} &deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p> Minimum Temperature = {info.tempMin}</p>
            <p> Maximum Temperature = {info.tempMax}</p>
            <p> The weather can be describes as {info.weather} and feels Like = {info.feelsLike}</p>

        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
    )
}