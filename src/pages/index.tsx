import type { GetServerSideProps, NextPage } from "next";
import Navbar from "../components/NavBar";
import { setWeather } from "../store/weatherSlice";
import UpcomingWeather from "../components/UpcomingWeather";
import CurrentWeather from "../components/CurrentWeather";
import { useAppDispatch, useAppSelector } from "../hooks/customReduxHook";
import CurrentStats from "../components/CurrentStats";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("https://www.metaweather.com/api/location/1047378/");
  const data = await res.json();

  return { props: { data } };
};

const Home: NextPage = ({ data }: any) => {
  const dispatch = useAppDispatch();
  const weather: any = useAppSelector((state) => state.weather.weather);
  if (!data) {
    return <div>Under Maintainence</div>;
  }
  if (!weather) {
    dispatch(setWeather(data));
  }

  return (
    <div className="flex flex-col max-w-full max-h-full min-h-screen max-w-screen min-w-screen">
      <Navbar />
      <div className="grid flex-auto grid-cols-4 grid-rows-3 gap-8 px-8 py-6">
        <CurrentWeather />
        <CurrentStats />
        <UpcomingWeather />
      </div>
    </div>
  );
};

export default Home;
