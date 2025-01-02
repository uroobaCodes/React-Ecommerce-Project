import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import Modal from "./components/Modal/Modal";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AYzhoksG4UeNXvkwej0HYP5bkbTsQIED85ihmkCFybcKpWqdDuB2J_5ybWzjVFO6jifnc9GI4KAgyHQ4",
        }}
      >
        <RouterProvider router={router}></RouterProvider>
      </PayPalScriptProvider>
    </>
  );
}

export default App;
