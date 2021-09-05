import Image from "next/image";
import { useAppSelector } from "../hooks/customReduxHook";
import Card from "./Card";

const UpcomingWeather = () => {
  const weather: any = useAppSelector((state) => state.weather.weather);

  return (
    <Card className="flex flex-row justify-around flex-auto w-full h-full col-span-3 gap-4">
      {weather.consolidated_weather.slice(1).map((item: any, id: any) => {
        return (
          <div key={id} className="flex flex-col items-center">
            <div>{item.applicable_date}</div>
            <div>
              <Image
                src={`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`}
                alt=""
                width="150"
                height="150"
              />
            </div>
            <div>{item.weather_state_name}</div>
          </div>
        );
      })}
    </Card>
  );
};

export default UpcomingWeather;
