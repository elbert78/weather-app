import Card from "../components/Card";
import Clock from "react-live-clock";
import Image from "next/image";
import { useAppSelector } from "../hooks/customReduxHook";
import SearchBar from "./SearchBar";

const CurrentWeather = () => {
  const weather: any = useAppSelector((state) => state.weather.weather);
  return (
    <Card className="flex flex-col items-center justify-center w-full h-full row-span-3 gap-4">
      <SearchBar />
      <div className="text-5xl text-gray-800">Today</div>
      <div className="text-3xl">{weather.title}</div>
      <div className="mt-4">
        <Image
          src={`https://www.metaweather.com/static/img/weather/${weather.consolidated_weather[0].weather_state_abbr}.svg`}
          alt=""
          width="250"
          height="250"
        />
      </div>
      <div className="flex flex-col mt-4 text-2xl text-gray-700">
        <div>{weather.consolidated_weather[0].weather_state_name}</div>
      </div>
      <div className="flex flex-col items-center text-3xl">
        <div>
          <Clock format={"dddd"} ticking={true}></Clock>
        </div>
        <div className="mt-2">
          <Clock format={"DD MMMM YYYY"} ticking={true} />
        </div>
        <div className="mt-2">
          <Clock format={"h:mm A"} ticking={true} />
        </div>
      </div>
    </Card>
  );
};

export default CurrentWeather;
