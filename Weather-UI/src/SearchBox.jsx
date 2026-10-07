
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({updateInfo}){
    let [city , setCity] = useState("");
    let [error, setError] = useState("");

     const URL = "https://api.openweathermap.org/data/4.0/onecall/current";
     const AI_KEY = "491695f66ebd1a15a09d790c36fdb3ea";


    let getWeather = async () => {
        try{
            let res  = await fetch(`${URL}?q={city}&appid=${API_KEY}&units=metric`);
        let jsonRes = await res.json();
        console.log(jsonRes);

        let result = {
            city: city,
            temp: jsonRes.main.temp,
            tempMin: jsonRes.main.temp_min,
            tempMax: jsonRes.main.temp_max,
            humidity: jsonRes.main.humidity,
            feelsLike: jsonRes.main.feelsLike,
            weather: jsonRes.weather[0].description,



        };
        console.log(result);
        return result;
        }
        catch(err){
            console.log(err);
        }
        
    };

    

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeather();
        updateInfo(newInfo);
    }
    return (
        <div className='SearchBox'>
            
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br><br></br><br></br>
               <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>
        </div>
    )
}