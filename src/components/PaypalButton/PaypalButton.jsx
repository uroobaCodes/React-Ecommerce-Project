import { useGlobalContext } from "../../context";
import styles from "./paypal.module.css";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

const style = { layout: "vertical", shape: "pill" }; // Customize button layout

const createOrder = (cart) => {
  const formattedTotal = cart
    .reduce((total, item) => total + item.price * item.count, 0)
    .toFixed(2);
  console.log(formattedTotal);
  return fetch(
    "https://react-paypal-js-storybook.fly.dev/api/paypal/create-order",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // cart: [
        //   {
        //     sku: "1blwyeo8",
        //     quantity: 2,
        //   },
        // ],
        cart: cart.map((item) => ({
          sku: "1blwyeo8", // Use `id` as the SKU
          quantity: item.count, // Use `count` for the quantity
        })),
        // here we are making paypal total equal to cart total
        total: parseFloat(formattedTotal),
      }),
    }
  )
    .then((response) => response.json())
    .then((order) => order.id); // Return the created order ID
};

const onApprove = (data, actions, clearCart, navigate) => {
  // Log the successful payment approval
  console.log("Payment was approved:", data);

  return fetch(
    "https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    }
  )
    .then((response) => response.json())
    .then((orderData) => {
      // Handle the order capture logic (e.g., updating the database, sending confirmation)
      console.log("Order captured:", orderData);
      clearCart();
      navigate("/");
    })
    .catch((error) => {
      console.error("Error capturing the order:", error);
    });
};

const onCancel = (data) => {
  // Log the canceled payment
  console.log("Payment was canceled:", data);
};

// Custom component to wrap PayPalButtons
const ButtonWrapper = ({ showSpinner }) => {
  const [{ isPending }] = usePayPalScriptReducer();
  const { clearCart, cartTotal, cart } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <div className={`main-background ${styles.paypalContainer}`}>
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[style, cartTotal]} //rerender if cartTotal changes
          createOrder={() => createOrder(cart)}
          onApprove={(data, actions) =>
            onApprove(data, actions, clearCart, navigate)
          } // Log success on approval
          onCancel={onCancel} // Log cancellation
        />
      </div>
    </>
  );
};

export default ButtonWrapper;
