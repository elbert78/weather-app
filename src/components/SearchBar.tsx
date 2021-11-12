import { SearchIcon } from "@heroicons/react/solid";
import { Formik, Form, Field } from "formik";
import { useAppDispatch } from "../hooks/customReduxHook";
import { setWeather } from "../store/weatherSlice";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const fetchData = async (values: any) => {
    let woeid = await fetch(
      `https://www.metaweather.com/api/location/search/?query=${values.data.replace(
        /\s+/g,
        "%20"
      )}`
    ).then((res) => res.json());

    let weather = await fetch(
      `https://www.metaweather.com/api/location/${woeid[0].woeid}`
    ).then((res) => res.json());

    dispatch(setWeather(weather));
  };
  return (
    <div className="w-full">
      <Formik
        initialValues={{ data: "" }}
        onSubmit={async (values, { resetForm }) => {
          fetchData(values);
          resetForm();
        }}
      >
        {({ values }) => (
          <Form>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500 sm:text-sm">
                  <SearchIcon className="w-4 h-4 fill-current" />
                </span>
              </div>
              <Field
                type="text"
                name="data"
                id="data"
                className="block w-full pl-8 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search"
              />
              {/* <div className="absolute inset-y-0 right-0 flex items-center justify-center">
            <button>
              <SearchIcon className="w-4 h-4 fill-current" />
            </button>
          </div> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBar;
