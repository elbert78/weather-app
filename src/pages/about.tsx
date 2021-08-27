import { NextPage } from "next";
import NavBar from "../components/NavBar";

const about: NextPage = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-8 my-6">
        <h1>About Page</h1>
      </div>
    </div>
  );
};

export default about;
