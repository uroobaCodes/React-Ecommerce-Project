import { useGlobalContext } from "../../context";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ id, title, img, price, total, count }) => {
  const { increment, decrement, removeItem } = useGlobalContext();
  return (
    <div className={`row pb-5 text-center text-capitalize main-background`}>
      <div className={`col-10 mx-auto col-lg-2`}>
        <img
          src={img}
          alt="product"
          style={{ width: "5rem", height: "5rem" }}
          className={`img-fluid`}
        />
      </div>
      <div className={`col-10 mx-auto col-lg-2 `}>
        <span className={`d-lg-none`}>Product: </span>
        {title}
      </div>
      <div className={`col-10 mx-auto col-lg-2`}>
        <span className={`d-lg-none`}>Price: </span>
        {price}
      </div>
      {/* setting up increment and decrement */}
      <div className={`col-10 mx-auto col-lg-2 my-2 my-lg-0`}>
        <div className={`d-flex justify-content-center`}>
          <span
            className={`btn btn-outline-dark mx-1`}
            onClick={() => decrement(id)}
          >
            -
          </span>
          <span className={`btn btn-outline-dark mx-1`}>{count}</span>
          <span
            className={`btn btn-outline-dark mx-1`}
            onClick={() => increment(id)}
          >
            +
          </span>
        </div>
      </div>
      {/* increment decrement div end */}
      <div className={`col-10 mx-auto col-lg-2`}>
        <div
          className={`text-primary`}
          style={{ cursor: "pointer" }}
          onClick={() => removeItem(id)}
        >
          <FaTrash />
        </div>
      </div>

      <div className={`col-10 mx-auto col-lg-2`}>
        <strong className={``}>Total: $ {total} </strong>
      </div>
    </div>
  );
};
export default CartItem;
