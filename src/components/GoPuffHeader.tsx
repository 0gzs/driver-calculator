import cardImg from '../assets/card.png';

const GoPuffHeader = () => {
  return (
    <div className="card mb-4">
      <div className="img-container">
        <img src={cardImg} className="card-img-top" alt="..." />
      </div>
      <div className="card-body" style={{ }}>
        <h2 className="card-title">Driver Pay Calculator</h2>
        <p className="card-text" style={{ color: '#888'}}>Calculating driver-pay made easy.</p>
      </div>
    </div>
  );
};

export default GoPuffHeader;
