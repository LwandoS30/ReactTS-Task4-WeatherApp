import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MainWrapper } from './WeatherApp.module.ts'
import { WiHumidity } from 'react-icons/wi'
import { BsFillSunFill, BsCloudyFill, BsFillCloudRainFill, BsCloudFog2Fill, BsFillCloudyFill } from 'react-icons/bs'
import { RiLoaderFill } from 'react-icons/ri'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import axios from 'axios'

interface WeatherDataProps{
    name: string;

    main:{
        temp: number;
        humidity: number;
    };

    sys:{
        country: string;
    };

    weather: {
        main: string;
    }[];
    wind: {
        speed: number;
    };
}

export const WApp = () => {
    const api_key ="0cc86d16bf572f78cdc96c096c7627e5";
    const api_Endpoint = "https://api.openweathermap.org/data/2.5";

    const [weatherData, setWeatherData] = React.useState<WeatherDataProps | null>(null);

    const [isLoading, setIsLoading] = React.useState(false);

    const [searchCity, setSearchCity] = React.useState('');

    const fetchCurrentWeather = async (lat: number, lon: number) => {
        const url = `${api_Endpoint}/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
        const response = await axios.get(url);
        return response.data;
    };

    const fetchWeatherData = async(city:string) => {
        try{
            const url = `${api_Endpoint}/weather?q=${city}&appid=${api_key}&units=metric`;
            const searchResponse = await axios.get(url);

            const currentWeatherData:WeatherDataProps = searchResponse.data;
            return{currentWeatherData};

        }catch(error){
            console.error('No Data Found')
            throw error;
        }
    }

    const handleSearch = async () => {
        if(searchCity.trim() === '') return;

        try{
            setIsLoading(true);
            const { currentWeatherData } = await fetchWeatherData(searchCity);
            setWeatherData(currentWeatherData);
            setIsLoading(false);
        }catch(error){
            console.error('No results Found')
            setIsLoading(false);
        }
    };

    const iconChanger = (weather: string) => {

        let iconElement: React.ReactNode;
        let iconColor: string;

        switch(weather){
            case "Rain":
            iconElement = <BsFillCloudRainFill />
            iconColor='#272829';
            break;

            case "Clear":
            iconElement = <BsFillSunFill />
            iconColor='#FFC436';
            break;

            case "Clouds":
            iconElement = <BsFillCloudyFill />
            iconColor='#279EFF';
            break;

            case "Mist":
            iconElement = <BsCloudFog2Fill />
            iconColor='#272829';
            break;

            default:
                iconElement = <TiWeatherPartlySunny />
                iconColor ="#7B2869";
        }
        return(
            <span className='icon' style={{color: iconColor}}>
                {iconElement};
            </span>
        )
    }

    React.useEffect(()=> {
        setIsLoading(true);
        navigator.geolocation.getCurrentPosition((position) =>{
            const { latitude, longitude } = position.coords;
            fetchCurrentWeather(latitude, longitude).then(
                (currentWeather) => {
                    setWeatherData(currentWeather);
                    setIsLoading(false);
                }
            );
        });
    },[]);

    return(
        <MainWrapper>
            <div className='container'>
                <div className='searchArea'>
                    <input type="text" 
                    placeholder='Enter a city' 
                     value={searchCity}
                     onChange={(e) => setSearchCity(e.target.value)}
                    />

                    <div className='searchCircle'>
                        <AiOutlineSearch className='searchIcon' onClick={handleSearch}/>
                    </div>
                </div>

                {isLoading ? (
                    <div className='loading'>
                        <RiLoaderFill className='loadingaIcon' />
                        <p>Loading</p>
                    </div>
                ) : weatherData ? (
                    <>
                        <div className="weatherArea">
                            <h2>{weatherData.name}</h2>
                            <span>{weatherData.sys.country}</span>

                            <div className='icon'>
                                {iconChanger(weatherData.weather[0].main)}
                            </div>

                            <div >
                                <h2>{weatherData.main.temp}</h2>
                                <h3>{weatherData.weather[0].main}</h3>
                            </div>
                        </div>

                        <div className='bottomInfoArea'>
                            <div className='humidityLevel'>
                                <WiHumidity className='windIcon' />
                                <div className='humidityInfo'>
                                    <h2>{weatherData.main.humidity}%</h2>
                                    <p>Humidity</p>
                                </div>
                            </div>

                            <div className='wind'>
                                <div className='humidityInfo'>
                                    <h2>{weatherData.wind.speed}</h2>
                                    <p>Wind Speed</p>
                                </div>
                            </div>
                        </div>
                   </>
                ) : null };
            </div>
        </MainWrapper>
    );
};