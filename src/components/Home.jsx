import React, { useContext, useState } from "react";
import faker from "faker";
import SingleProduct from "./SingleProduct";
import cartContext from "../context/CartContext";

faker.seed(100);

const productArray = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price()
}));

const Home = () => {
  const { cart, setCart } = useContext(cartContext);

  const [product] = useState(productArray);
  return (
    <div className="productContainer">
      {product.map((prod) => (
        <SingleProduct key={prod.id} prod={prod} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default Home;
