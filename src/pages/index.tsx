import type { GetServerSideProps, NextPage } from "next";
import Navbar from "../components/NavBar";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
  const res = await fetch("https://www.metaweather.com/api/location/1047378/");
  const data = await res.json();
  return { props: { data } };
};

const Home: NextPage = ({ data }: any) => {
  console.log(data);
  return (
    <div className="">
      <Navbar />
      <div>
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default Home;
