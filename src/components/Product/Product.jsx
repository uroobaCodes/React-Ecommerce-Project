import styles from "./product.module.css";
import { useGlobalContext } from "../../context";
import { ProductWrapper } from "../../Styles/productwrapper";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({
  id,
  title,
  img,
  price,
  company,
  info,
  inCart,
  count,
  total,
}) => {
  const { handleDetail, addToCart, openModal } = useGlobalContext();

  // type checking
  const validatePrice = (value, defaultVal) => {
    if (typeof value !== "number") {
      return defaultVal;
    } else {
      return value;
    }
  };

  const validPrice = validatePrice(price, 0);

  const validateCart = (value, defaultVal) => {
    if (typeof value !== "boolean") {
      return defaultVal;
    } else {
      return value;
    }
  };

  const validCart = validateCart(inCart, false);

  return (
    <>
      <ProductWrapper className={`col-9 mx-auto col-md-6 col-lg-3 my-3`}>
        <div className={`card`}>
          {/* card is a bootstrap class but img-container is not */}
          {/* we will style the im container in styled component */}
          <div className={`img-container p-5`} onClick={() => handleDetail(id)}>
            <NavLink to="/details">
              <img src={img} alt="Product" className={`card-img-top`} />
            </NavLink>

            <button
              className={`cart-btn`}
              disabled={validCart ? true : false}
              onClick={() => {
                addToCart(id);
                openModal(id);
              }}
            >
              {validCart ? (
                <p className={`text-capitalize mb-0 `} disabled>
                  in the cart
                </p>
              ) : (
                <FaShoppingCart />
              )}
            </button>
          </div>
          {/* card footer */}
          <div className={`card-footer d-flex justify-content-between`}>
            <p className={`align-self-center mb-0`}>{title}</p>
            <h5 className={`text-blue fst-italic mb-0`}>
              <span className={`me-1`}>$</span>
              {validPrice}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    </>
  );
};
export default Product;
