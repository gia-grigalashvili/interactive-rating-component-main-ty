import "./result.css";
import star from "/public/images/illustration-thank-you.svg";

export default function Result({ rate }) {
  return (
    <div className="conteiner">
      <div className="imges">
        {" "}
        <img src={star} alt="" />
      </div>

      <div className="text ">
        <h2>You selected {rate} out of 5</h2>
      </div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
