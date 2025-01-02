const Title = ({ name, title }) => {
  return (
    <>
      <div className={`row main-background`}>
        {/* text-title class if from global app.css */}
        <div className={`col-10 mx-auto my-2 text-center text-title`}>
          <h1 className={`text-capitalize font-weight-bold`}>
            {name}
            <strong className={`text-blue`}>
              <span> </span>
              {title}
            </strong>
          </h1>
          {/* text-blue class is from app.css */}
        </div>
      </div>
    </>
  );
};
export default Title;
