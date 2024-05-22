/* eslint-disable prefer-const */
import "./Rate.css";
import star from "/public/images/icon-star.svg";

export default function Rate({ setsumbit, rate, setrate }) {
  let buttons: number[] = [1, 2, 3, 4, 5];

  return (
    <div className="conteiner">
      <div className="imgs">
        <img src={star} alt="" />
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
            onClick={() => setrate(button)}
            key={button}
            style={rate == button ? { backgroundColor: "yellow" } : {}}
          >
            {button}
          </button>
        ))}
      </div>
      <button className="sumbit" onClick={() => setsumbit(true)}>
        sumbit
      </button>
    </div>
  );
}
