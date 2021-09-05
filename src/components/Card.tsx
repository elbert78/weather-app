interface CardProps {
  className?: String;
  children?: any;
}

const Cards = (props: CardProps) => {
  return (
    <div className={`bg-gray-100 rounded-lg shadow-lg p-7 ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Cards;
