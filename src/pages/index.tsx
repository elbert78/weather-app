import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Navbar from "../components/NavBar";
import Card from "../components/Card";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
  const res = await fetch("https://www.metaweather.com/api/location/1047378/");
  const data = await res.json();

  return { props: { data } };
};

const Home: NextPage = ({ data }: any) => {
  console.log(data.consolidated_weather);

  return (
    <div className="flex flex-col max-w-full max-h-full min-h-screen max-w-screen min-w-screen">
      <Navbar />
      <div className="grid flex-auto grid-cols-4 grid-rows-3 gap-8 px-8 py-6">
        <Card className="flex flex-col items-center w-full h-full row-span-3 gap-4">
          <div className="text-5xl text-gray-800">Today</div>
          <div>
            <Image
              src={`https://www.metaweather.com/static/img/weather/${data.consolidated_weather[0].weather_state_abbr}.svg`}
              alt=""
              width="250"
              height="250"
            />
          </div>
          <div className="flex flex-col text-gray-700">
            <div>{data.consolidated_weather[0].weather_state_name}</div>
          </div>
        </Card>

        <Card>
          <div className="text-xl text-gray-500">Temperature</div>
          <div>
            {Math.round(data.consolidated_weather[0].the_temp * 10) / 10} C
          </div>
        </Card>
        <Card>
          <div className="text-xl text-gray-500">Humidity</div>
          <div>{data.consolidated_weather[0].humidity}%</div>
        </Card>
        <Card>
          <div className="text-xl text-gray-500">Wind Speed</div>
          <div>
            {Math.round(data.consolidated_weather[0].wind_speed * 10) / 10}{" "}
            <sub>mph</sub>
          </div>
        </Card>
        <Card className="flex flex-col">
          <div className="text-xl text-gray-500 ">Air Pressure</div>
          <div className="flex flex-row flex-auto h-full ">
            <div className="text-5xl font-semibold ">
              {Math.round(data.consolidated_weather[0].air_pressure * 10) / 10}{" "}
            </div>
            <div>mbar</div>
          </div>
        </Card>
        <Card>
          <div className="text-xl text-gray-500">Visibility</div>
          <div>
            {Math.round(data.consolidated_weather[0].visibility * 10) / 10}{" "}
            miles
          </div>
        </Card>
        <Card>
          <div className="text-xl text-gray-500">Predictability</div>
          {data.consolidated_weather[0].predictability}%
        </Card>
        <Card className="flex flex-row justify-around flex-auto w-full h-full col-span-3 gap-4">
          {data.consolidated_weather.slice(0).map((item: any, id: any) => {
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
      </div>
    </div>
  );
};

export default Home;
