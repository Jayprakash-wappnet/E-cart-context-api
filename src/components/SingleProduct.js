import { useContext } from "react";
import cartContext from "../context/CartContext";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(cartContext);
  return (
    <div className="products">
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹ {prod.price.substring(0, 2)}</span>
      </div>

      {cart.includes(prod) ? (
        <button className="add remove" onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}>
          Remove from Cart
        </button>
      ) : (
        <button className="add" onClick={() => setCart([...cart, prod])}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
