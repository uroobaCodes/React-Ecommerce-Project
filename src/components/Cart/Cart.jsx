import styles from "./cart.module.css";
import Title from "../Title/Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { useGlobalContext } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import ButtonWrapper from "../PaypalButton/PaypalButton";

const Cart = () => {
  const { cart } = useGlobalContext();
  if (cart.length > 0) {
    return (
      <>
        <Title name="your" title="Cart" />
        <CartColumns />
        <CartList />
        <CartTotals />
        <ButtonWrapper showSpinner={false} />
      </>
    );
  }

  return (
    <section className={`main-background pt-5`}>
      <EmptyCart />;
    </section>
  );
};
export default Cart;
