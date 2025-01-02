import { useContext, createContext, useState, useEffect } from "react";
import { produce } from "immer";
import { storeProducts, detailProduct } from "./data";
// import { storeProducts } from "./data";

// create context
const AppContext = createContext();

// custom use context hook with named export. can be used anywhere.
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// context provider. we add our states here
const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(storeProducts);
  const [detail, setDetail] = useState(detailProduct);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [cart, setCart] = useState([]);
  // states for the cart components
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const resetProducts = () => {
    const tempProducts = storeProducts.map((item) => ({ ...item }));
    setProducts(tempProducts);
  };
  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setDetail(product);
  };

  const addToCart = (id) => {
    const tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = { ...tempProducts[index] };

    product.inCart = true;
    product.count = 1;

    const price = product.price;
    // make this price equal to total
    product.total = price;
    // replace the product in the array
    tempProducts[index] = product;
    // Update products state(this will show 'in cart' on the button)
    setProducts(tempProducts);
    // Update the detail state if the updated product is the current detail
    if (detail.id === id) {
      setDetail(product);
    }
    // this setup is not calculating correctly because of react's async nature for state updates
    // setCart((prevCart) => [...prevCart, product]);
    // addTotals();
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      addTotals(updatedCart);
      return updatedCart;
    });
  };

  const openModal = (id) => {
    const product = getItem(id);
    setModalContent(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // functions for cart component
  const increment = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;
    tempCart[index] = product;
    setCart([...tempCart]);
    addTotals(tempCart);
  };
  const decrement = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count === 0) {
      removeItem(id);
      return;
    }
    product.total = product.count * product.price;
    tempCart[index] = product;
    setCart([...tempCart]);
    addTotals(tempCart);
  };

  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];
    // remove the item from  cart copy
    tempCart = tempCart.filter((item) => item.id !== id);
    // grab the index of the item from state
    const index = tempProducts.indexOf(getItem(id));
    // grab the item from state copy with index and save it
    let removedProduct = tempProducts[index];
    // change its properties
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    //replace the product in state's copy with index
    tempProducts[index] = removedProduct;
    setCart(tempCart);
    setProducts(tempProducts);
    // its important to change the totals as well
    addTotals(tempCart);
  };

  const clearCart = () => {
    const updatedCart = [];
    setCart(updatedCart);
    resetProducts();
    addTotals(updatedCart);
  };
  function addTotals(updatedCart) {
    let subTotal = updatedCart.reduce((accumulator, item) => {
      return accumulator + item.total;
    }, 0);
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    // set state
    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  }
  // when the product will change this will run
  // useEffect(() => {
  //   console.log(products);
  // }, [products]);

  // const tester = () => {
  //   console.log("original from tester:");
  //   console.log(storeProducts[0].inCart);

  //   setProducts((products) => {
  //     const newVar = products.map((product, index) => {
  //       if (index === 0) {
  //         return { ...product, inCart: true };
  //       }
  //       return product;
  //     });
  //     return newVar;
  //   });
  // };

  // useEffect(() => {
  //   console.log("again original useEffect:");
  //   console.log(storeProducts[0].inCart);
  //   console.log("again stat data useEffect:");
  //   console.log(products[0].inCart);
  // }, [products]);

  // test with immer

  // const tester = () => {
  //   setProducts(
  //     produce(products, (draft) => {
  //       const newVar = draft.map((product, index) => {
  //         if (index === 0) {
  //           return { ...product, inCart: true };
  //         }
  //         return product;
  //       });
  //       return newVar;
  //     })
  //   );
  // };
  // useEffect(() => {
  //   console.log("original useEffect:");
  //   console.log(storeProducts[0].inCart);
  //   console.log("state data useEffect:");
  //   console.log(products[0].inCart);
  // }, [products]);

  return (
    <AppContext.Provider
      value={{
        products,
        detail,
        handleDetail,
        addToCart,
        openModal,
        closeModal,
        modalContent,
        modalOpen,
        cart,
        increment,
        decrement,
        removeItem,
        clearCart,
        cartSubTotal,
        cartTax,
        cartTotal,
      }}
    >
      {/* <button onClick={tester}>I am in App</button> */}

      {children}
    </AppContext.Provider>
  );
};

// named export app provider for main.jsx wrapping of <app/>
export { AppProvider };
