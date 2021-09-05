import Card from "./Card";
interface UnitProps {
  className?: String;
  name: String;
  data: any;
  unit: JSX.Element | String;
}

const Unit = (props: UnitProps) => {
  return (
    <Card className={props.className}>
      <div className="text-xl text-gray-500">{props.name}</div>
      <div className="flex flex-row items-center w-full h-2/3">
        <div className="flex flex-row w-full text-5xl font-semibold">
          {props.data}
          <div className="mt-5 ml-2 text-xl font-normal">
            {/* <span>&#176;</span> */}
            {props.unit}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Unit;
