import Picture from "./Picture";
import data from "../helper/data.js";

const PictureHolder = () => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <Picture {...item} />
        </div>
      ))}
    </div>
  );
};

export default PictureHolder;
