const Unit = (props: any) => {
  return (
    <div className={`bg-gray-100 rounded-lg shadow-lg p-7 ${props.className}`}>
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
    </div>
  );
};

export default Unit;
