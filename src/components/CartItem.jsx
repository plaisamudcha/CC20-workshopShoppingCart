import CartItemSelect from "./CartItemSelect";

export default function CartItem(props) {
  const { arrItem, incQuantityItem, decQuantityItem } = props;
  const total = arrItem.reduce(
    (prev, curr) => (prev += curr.quantity * curr.price),
    0
  );
  const tax = total * 0.07;
  return (
    <div className="bg-accent-content w-3/8 px-1.5 pt-3">
      <h1 className="mb-4">CartItem :</h1>
      <div className="flex flex-col gap-1.5">
        {arrItem.map((el) => (
          <CartItemSelect
            key={el.id}
            item={el}
            incQuantityItem={incQuantityItem}
            decQuantityItem={decQuantityItem}
          />
        ))}
      </div>
      {arrItem.length === 0 ? (
        <div className="flex justify-center">
          <p>Please Choose your products</p>
        </div>
      ) : (
        <div>
          <br />
          <hr />
          <div className="p-1 flex flex-col gap-2">
            <div className="flex justify-between px-2">
              <p>Total products price :</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between px-2">
              <p>Tax :</p>
              <p>${tax.toFixed(2)}</p>
            </div>
            <div className="flex justify-between px-2">
              <p>Shipping Price :</p>
              <p>${(0).toFixed(2)}</p>
            </div>
            <div className="flex justify-between px-2 underline decoration-double">
              <p>Total Price :</p>
              <p>${(total + tax).toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
