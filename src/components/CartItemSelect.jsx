export default function CartItemSelect(props) {
  const {
    item: { id, title, price, quantity },
    incQuantityItem,
    decQuantityItem,
  } = props;
  return (
    <div className="bg-base-200 rounded-md flex items-center justify-between px-1.5 h-10">
      <p className="w-3/8">
        {title.split(" ")[0]}{" "}
        {title.split(" ")[1] === "-"
          ? title.split(" ")[2]
          : title.split(" ")[1]}
      </p>
      <div>
        <button
          onClick={() => {
            decQuantityItem(id);
          }}
          className="btn bg-accent text-amber-100 h-8 w-8"
        >
          -
        </button>
        <button
          onClick={() => {
            incQuantityItem(id, title, price);
          }}
          className="btn bg-accent text-amber-100 h-8 w-8"
        >
          +
        </button>
      </div>
      <p className="w-2/8 text-right">
        {quantity} x ${price.toFixed(2)}
      </p>
    </div>
  );
}
