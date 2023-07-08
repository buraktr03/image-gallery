import Picture from "./Picture";
import data from "../helper/data.js";

const PictureHolder = () => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <Picture {...item} />
        </div>
      ))}
    </>
  );
};

export default PictureHolder;
