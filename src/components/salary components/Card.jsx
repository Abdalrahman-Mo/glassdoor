function Card({ source }) {
  return (
    <div className="card--salary">
      <img src={source} alt="" />
      <div className="card__text">
        <h4>How to Write a Salary Negotiation Email</h4>
        <p>
          Thinking of asking for more from a job offer? Learn how to write a
          salary negotiation email the right way.
        </p>
        <button>Read Article</button>
      </div>
    </div>
  );
}

export default Card;
