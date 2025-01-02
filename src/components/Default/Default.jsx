import styles from "./default.module.css";
import { useLocation } from "react-router-dom";

const Default = () => {
  return (
    <div className={`container-fluid main-background`}>
      <div className={`row`}>
        <div className={`col-10 mx-auto text-center text-uppercase pt-5`}>
          <h1 className={`display-4 text-title`}>404</h1>
          <h2>Error</h2>
          <h3>Page Not Found</h3>
          <p>
            The requested URL
            <span className={`text-danger`}>"{location.pathname}"</span> was not
            found
          </p>
        </div>
      </div>
    </div>
  );
};
export default Default;
