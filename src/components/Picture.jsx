import "../styles/style.css";

const Picture = ({ photographer, src }) => {
  return (
    <div className="card text-center p-2 m-3">
      <img src={src.large} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{photographer}</h5>
      </div>
    </div>
  );
};

export default Picture;
