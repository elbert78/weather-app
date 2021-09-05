import Unit from "../components/Unit";
import { useAppSelector } from "../hooks/customReduxHook";
const CurrentStats = () => {
  const weather: any = useAppSelector((state) => state.weather.weather);

  return (
    <>
      <Unit
        name="Temperature"
        data={Math.round(weather.consolidated_weather[0].the_temp * 10) / 10}
        unit={
          <>
            <span>&#176;</span>C
          </>
        }
      />
      <Unit
        name="Humidity"
        data={weather.consolidated_weather[0].humidity}
        unit="%"
      />
      <Unit
        name="Wind Speed"
        data={Math.round(weather.consolidated_weather[0].wind_speed * 10) / 10}
        unit="mph"
      />
      <Unit
        name="Air Pressure"
        data={
          Math.round(weather.consolidated_weather[0].air_pressure * 10) / 10
        }
        unit="mbar"
      />
      <Unit
        name="Visibility"
        data={Math.round(weather.consolidated_weather[0].visibility * 10) / 10}
        unit="miles"
      />

      <Unit
        name="Predictability"
        data={weather.consolidated_weather[0].predictability}
        unit="%"
      />
    </>
  );
};

export default CurrentStats;
