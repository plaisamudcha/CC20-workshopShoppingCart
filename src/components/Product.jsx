export default function Product(props) {
  const {
    item: { title, id, category, description, image, price },
    addToCart,
  } = props;
  return (
    <li className="list-row">
      <div>
        <img className="size-10 rounded-box" src={image} />
      </div>
      <div>
        <div>{title}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {category}
        </div>
      </div>
      <p className="list-col-wrap text-xs">{description}</p>
      <p>Price : {price}</p>
      <button
        className="btn btn-square w-25"
        onClick={() => {
          addToCart(id, title, price);
        }}
      >
        Add To Cart
      </button>
    </li>
  );
}
