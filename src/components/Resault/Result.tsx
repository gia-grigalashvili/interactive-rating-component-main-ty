import "./Result.css";
import star from "/public/images/illustration-thank-you.svg";
type RateProps = {
  rate: number | null;
};
export default function Result({ rate }: RateProps) {
  return (
    <div className="conteiner">
      <div className="images">
        <img src={star} alt="Thank You" />
      </div>
      <div className="text">
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
