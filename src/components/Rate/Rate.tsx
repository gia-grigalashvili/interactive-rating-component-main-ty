/* eslint-disable prefer-const */
import "./Rate.css";
import star from "/public/images/icon-star.svg";

export default function Rate({ setSubmit, rate, setRate }) {
  let buttons: number[] = [1, 2, 3, 4, 5];

  return (
    <div className="conteiner">
      <div className="images">
        <img src={star} alt="Star Icon" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="button-cont">
        {buttons.map((button) => (
          <button
            className="rate"
            onClick={() => setRate(button)}
            key={button}
            style={rate === button ? { backgroundColor: "yellow" } : {}}
          >
            {button}
          </button>
        ))}
      </div>
      <button className="sumbit" onClick={() => setSubmit(true)}>
        Submit
      </button>
    </div>
  );
}
