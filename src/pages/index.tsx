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
      <div className="grid flex-auto grid-cols-3 grid-rows-3 gap-8 px-8 py-6">
        {/* flex flex-row w-full h-full row-span-3 gap-4 bg-gray-100 rounded-lg shadow-lg p-7 */}
        <Card className="flex flex-row w-full h-full row-span-3 gap-4">
          <div>
            <Image
              src={`https://www.metaweather.com/static/img/weather/${data.consolidated_weather[0].weather_state_abbr}.svg`}
              alt=""
              width="175"
              height="175"
            />
          </div>
          <div className="flex flex-col text-gray-700">
            <div>
              {/* Tanggal  */}
              {data.consolidated_weather[0].applicable_date}
            </div>
            <div>
              {/* Deskripsi cuaca */}
              {data.consolidated_weather[0].weather_state_name}
            </div>
          </div>
        </Card>

        <Card>
          <div>Temperature</div>
          {data.consolidated_weather[0].the_temp}
        </Card>
        <Card>
          <div>Humidity</div>
          {data.consolidated_weather[0].humidity}
        </Card>
        <Card>
          <div>Wind Speed</div>
          {data.consolidated_weather[0].wind_speed}
        </Card>
        <Card>
          <div>Predictability</div>
          {data.consolidated_weather[0].predictability}
        </Card>
        {/* flex flex-row justify-around flex-auto w-full h-full col-span-2 gap-4 bg-gray-100 rounded-lg shadow-lg p-7 */}
        <Card className="flex flex-row justify-around flex-auto w-full h-full col-span-2 gap-4">
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
