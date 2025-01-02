import { useGlobalContext } from "../../context";
import { NavLink } from "react-router-dom";

const CartTotals = () => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = useGlobalContext();
  return (
    <div className={`container-fluid  main-background`}>
      <div className={`row`}>
        <div
          className={`col-12 mt-2 ms-sm-5 ms-md-auto text-capitalize text-center`}
        >
          <NavLink to="/">
            <button
              className={`btn btn-outline-danger text-uppercase mb-3 px-2`}
              style={{ width: "160px" }}
              type="button"
              onClick={() => clearCart()}
            >
              clear cart
            </button>
          </NavLink>
          <h5>
            <span className={`text-title fs-6 fs-md-4`}>subtotal: </span>
            <strong className={`text-title fs-6 fs-md-4`}>
              $ {cartSubTotal}
            </strong>
          </h5>
          <h5>
            <span className={`text-title fs-6 fs-md-4 `}>tax: </span>
            <strong className={`text-title fs-6 fs-md-4`}>$ {cartTax}</strong>
          </h5>
          <h5>
            <span className={`text-title fs-6 fs-md-4`}>total: </span>
            <strong className={`text-title fs-6 fs-md-4`}>$ {cartTotal}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default CartTotals;
