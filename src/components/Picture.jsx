import "../styles/style.css";

const Picture = ({ photographer, src }) => {
  return (
    <div className="card text-center border-0">
      <div className="img-container rounded-4">
        <img src={src.large} className="card-img-top rounded-4" alt="..." />
      </div>
      <div className="card-body p-2">
        <h5 className="card-title">{photographer}</h5>
      </div>
    </div>
  );
};

export default Picture;
