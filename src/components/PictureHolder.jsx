import Picture from "./Picture";
import data from "../helper/data.js";

const PictureHolder = () => {
  return (
    <div className="container">
      {data.map((item, index) => (
        <div key={index}>
          <Picture {...item} />
        </div>
      ))}
    </div>
  );
};

export default PictureHolder;
