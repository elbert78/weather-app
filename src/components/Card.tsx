const Cards = (props: any) => {
  return (
    <div className={`bg-gray-100 rounded-lg shadow-lg p-7 ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Cards;
