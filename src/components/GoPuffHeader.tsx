import cardImg from '../assets/card.png';

const GoPuffHeader = () => {
  return (
    <div className="card mb-4">
      <div className="img-container">
        <img src={cardImg} className="card-img-top" alt="..." />
      </div>
      <div className="card-body" style={{ }}>
        <h2 className="card-title">Driver Pay Calculator</h2>
        <p className="card-text">This calculator serves as a method to generate an <em>estimate</em> of a driver partner's pay.</p>
      </div>
    </div>
  );
};

export default GoPuffHeader;
