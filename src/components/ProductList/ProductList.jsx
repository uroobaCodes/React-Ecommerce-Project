import Title from "../Title/Title";
import Product from "../Product/Product";
import styles from "./productlist.module.css";
// import { storeProducts, detailProduct } from "../../data";
import { useGlobalContext } from "../../context";

const ProductList = () => {
  const { products, detail } = useGlobalContext();
  return (
    <>
      <div className={`py-5 main-background`}>
        <div className={`container`}>
          <Title name="our" title="products" />
          {/* row for the products */}
          <div className={`row`}>
            {products.map((product, index) => {
              return <Product {...product} key={product.id} />;
            })}
          </div>

          {/* container ends */}
        </div>
      </div>

      {/* <Product /> */}
    </>
  );
};
export default ProductList;
