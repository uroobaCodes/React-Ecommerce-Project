import CartItem from "./CartItem";
import { useGlobalContext } from "../../context";

const CartList = () => {
  const { cart } = useGlobalContext();

  return (
    <div className={`container-fluid`}>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </div>
  );
};
export default CartList;
