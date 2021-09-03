import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Navbar from "../components/NavBar";
import Card from "../components/Card";
import Clock from "react-live-clock";
import Unit from "../components/Unit";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("https://www.metaweather.com/api/location/1047378/");
  const data = await res.json();

  return { props: { data } };
};

const Home: NextPage = ({ data }: any) => {
  return (
    <div className="flex flex-col max-w-full max-h-full min-h-screen max-w-screen min-w-screen">
      <Navbar />
      <div className="grid flex-auto grid-cols-4 grid-rows-3 gap-8 px-8 py-6">
        <Card className="flex flex-col items-center justify-center w-full h-full row-span-3 gap-4">
          <div className="text-5xl text-gray-800">Today</div>
          <div className="text-3xl">{data.title}</div>
          <div className="mt-4">
            <Image
              src={`https://www.metaweather.com/static/img/weather/${data.consolidated_weather[0].weather_state_abbr}.svg`}
              alt=""
              width="250"
              height="250"
            />
          </div>
          <div className="flex flex-col mt-4 text-2xl text-gray-700">
            <div>{data.consolidated_weather[0].weather_state_name}</div>
          </div>
          <div className="flex flex-col items-center text-4xl">
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

        <Unit
          name="Temperature"
          data={Math.round(data.consolidated_weather[0].the_temp * 10) / 10}
          unit="C"
        />
        <Unit
          name="Humidity"
          data={data.consolidated_weather[0].humidity}
          unit="%"
        />
        <Unit
          name="Wind Speed"
          data={Math.round(data.consolidated_weather[0].wind_speed * 10) / 10}
          unit="mph"
        />
        <Unit
          name="Air Pressure"
          data={Math.round(data.consolidated_weather[0].air_pressure * 10) / 10}
          unit="mbar"
        />
        <Unit
          name="Visibility"
          data={Math.round(data.consolidated_weather[0].visibility * 10) / 10}
          unit="miles"
        />

        <Unit
          name="Predictability"
          data={data.consolidated_weather[0].predictability}
          unit="%"
        />

        <Card className="flex flex-row justify-around flex-auto w-full h-full col-span-3 gap-4">
          {data.consolidated_weather.slice(1).map((item: any, id: any) => {
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
