const EmptyCart = () => {
  return (
    <div className={`container`}>
      <div className={`row`}>
        {/* text-title is in app.css */}
        <div className={`col-10 mx-auto text-center text-title`}>
          <h1>your cart is currently empty</h1>
        </div>
      </div>
    </div>
  );
};
export default EmptyCart;
