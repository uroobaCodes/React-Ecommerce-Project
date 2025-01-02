import styles from "./modal.module.css";
import styled from "styled-components";
import { useGlobalContext } from "../../context";
import { NavLink } from "react-router-dom";
import { ButtonComponent } from "../../Styles/button";
import { ModalWrapper } from "../../Styles/modalwrapper";

const Modal = () => {
  const { modalOpen, closeModal, modalContent } = useGlobalContext();
  const { img, title, price } = modalContent;

  if (!modalOpen) {
    return null;
  }
  return (
    <>
      <ModalWrapper>
        <div className={`container`}>
          <div className={`row`}>
            <div
              className={`col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize`}
              id="modal"
            >
              <h5>item added to the cart</h5>
              <img src={img} alt="product" className={`img-fluid`} />
              <h5>{title}</h5>
              <h5 className={`text-muted`}> price : $ {price}</h5>

              {/* button container */}
              <div className="d-flex flex-column align-items-center justify-content-center gap-3 my-2">
                <NavLink to="/">
                  <ButtonComponent onClick={() => closeModal()}>
                    continue shopping
                  </ButtonComponent>
                </NavLink>
                <NavLink to="/cart">
                  <ButtonComponent $cart={true} onClick={() => closeModal()}>
                    go to cart
                  </ButtonComponent>
                </NavLink>
              </div>
              {/* button container */}
            </div>
          </div>
        </div>
      </ModalWrapper>
      ;
    </>
  );
};
export default Modal;
