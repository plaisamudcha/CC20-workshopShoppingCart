import { useEffect, useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import CartItem from "./components/CartItem";
import { Loader } from "lucide-react";

function App() {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [arrItem, setArrItem] = useState([]);
  const [category, setCategory] = useState("All");
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      setProducts(data);
      setData(data);
      console.log("data", data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (id, title, price) => {
    let newObj = { id, title, price, quantity: 1 };
    let idx = arrItem.findIndex((el) => el.id === id);
    if (idx === -1) {
      setArrItem((prev) => [...prev, newObj]);
    } else {
      let clonedArr = [...arrItem];
      clonedArr[idx].quantity += 1;
      setArrItem(clonedArr);
    }
  };

  const incQuantityItem = (id, title, price) => {
    addToCart(id, title, price);
  };

  const decQuantityItem = (id) => {
    let idx = arrItem.findIndex((el) => el.id === id);
    if (arrItem[idx].quantity > 1) {
      let clonedArr = [...arrItem];
      clonedArr[idx].quantity -= 1;
      setArrItem(clonedArr);
    } else {
      let clonedArr = [...arrItem];
      clonedArr.splice([idx], 1);
      setArrItem(clonedArr);
    }
  };

  const arrCategory = products.reduce((prev, curr) => {
    if (!prev.includes(curr.category)) {
      prev.push(curr.category);
    }
    return prev;
  }, []);

  const selectCategory = (category) => {
    if (category === "All") {
      setData(products);
    } else {
      setData(products.filter((el) => el.category === category));
    }
    setCategory(category);
  };

  return (
    <div className="flex flex-col h-screen w-screen p-1">
      <Header arrItem={arrItem} />
      <div className="flex h-11/12">
        <div className="w-5/8 overflow-y-auto p-4">
          <h1 className="mb-3">Product list : {category}</h1>
          <div className="flex gap-2 mb-2">
            {arrCategory.map((el) => (
              <button
                className="btn"
                key={el}
                onClick={() => {
                  selectCategory(el);
                }}
              >
                {el}
              </button>
            ))}
            <button
              className="btn"
              onClick={() => {
                selectCategory("All");
              }}
            >
              All
            </button>
          </div>
          {isLoading ? (
            <div className="flex gap-1 justify-center my-80">
              <Loader className="animate-spin" />
              <p>Your Data hasn't working!!!</p>
            </div>
          ) : (
            <ul className="list bg-base-100 rounded-box shadow-md">
              {data.map((el) => (
                <Product key={el.id} item={el} addToCart={addToCart} />
              ))}
            </ul>
          )}
        </div>
        <CartItem
          arrItem={arrItem}
          incQuantityItem={incQuantityItem}
          decQuantityItem={decQuantityItem}
        />
      </div>
    </div>
  );
}

export default App;
