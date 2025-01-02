import styles from "./details.module.css";
import { NavLink } from "react-router-dom";
import { ButtonComponent } from "../../Styles/button";
import { useGlobalContext } from "../../context";
import { useEffect } from "react";

const Details = () => {
  const { detail } = useGlobalContext();
  const { id, company, img, info, price, title, inCart } = detail;
  const { addToCart, openModal } = useGlobalContext();

  if (!detail) {
    return <h1>Loading..</h1>;
  } else {
    return (
      <div className={`container py-5`}>
        {/* title */}
        <div className={`row`}>
          <div
            className={`col-10 mx-auto text-center text-slanted text-blue my-5`}
          >
            <h1>{title}</h1>
          </div>
        </div>
        {/* title end */}

        {/* product info */}
        <div className={`row`}>
          <div className={`col-10 mx-auto col-md-6 my-3`}>
            <img src={img} alt="product" className={`img-fliud`} />
          </div>
          {/* this is the product text div with button container */}
          <div className={`col-10 mx-auto col-md-6 my-3 text-capitalize`}>
            <h2>{title}</h2>
            <h4 className={`text-title text-uppercase text-muted mt-3 mb-2`}>
              made by : <span className={`text-uppercase`}>{company}</span>
            </h4>
            <h4>
              <strong>
                price : <span>$</span> {price}
              </strong>
            </h4>
            <p className={`text-capitalize font-weight-bold mt-3 mb-0 `}>
              info about the product
              <span className={`text-muted lead`}>{info}</span>
            </p>
            {/* button container */}
            <div>
              <NavLink to="/">
                <ButtonComponent
                  className={`${styles["button-component.link"]}`}
                >
                  back to products
                </ButtonComponent>
              </NavLink>
              <ButtonComponent
                $cart={true}
                disabled={inCart ? true : false}
                onClick={() => {
                  addToCart(id);
                  openModal(id);
                }}
              >
                {inCart ? "in cart" : "add to cart"}
              </ButtonComponent>
            </div>
          </div>
          {/* product text div end */}
        </div>
        {/* product info end */}
      </div>
    );
  }
};
export default Details;
