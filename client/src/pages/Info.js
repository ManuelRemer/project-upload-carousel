import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// styles
import "./Info.css";

const Info = () => {
  const [form, setForm] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="info">
      <article className="info__about">
        Hi! I am a freelance graphic designer with a passion for editorial
        design. <br />
        In my many years working for various publishing houses, I always loved
        <br />
        content-driven visual concepts. I believe in the power of flashy yet
        smart <br />
        designs but always with precision and high quality. While Im trying to
        take myself <br />
        not too serious I take the needs of my clients very seriously. I am
        always
        <br /> interested in collaborations and freelance opportunities. Just
        say hi!
      </article>

      <ul className="info__contact">
        <li>
          <h2>Drop me a line</h2>
          <p>anne.franke@me.com</p>
        </li>
        <li>
          <h2>Ring me up</h2>
          <p>+49 176 800 763 28</p>
        </li>
        <li>
          <h2>Stalk me</h2>
          <p>
            <a href="https://www.instagram.com/anneqwertzu">@anneqwertsu</a>
          </p>
        </li>
      </ul>

      <article>
        <h2>I've been happy working with</h2>
        <p>die Zeit, ZeitLeo, Zeit Campus, Emotion, WALDEN, BEEFI, Neon,</p>
        <p>Working Women, GEOLino, Finanzielle, Girlpower, Zeit Stiftung,</p>
        <p>Essen&Trinken, HoheLuft, Cornelia Poletto Magazin</p>
      </article>
      <div className="info__admin">
        {form && (
          <form
            onSubmit={() => {
              setForm(false);
            }}
          >
            <input type="password"></input>
          </form>
        )}
        <button
          onClick={() => {
            setForm(!form);
            navigate("/admin");
          }}
        >
          AF
        </button>
      </div>
    </div>
  );
};

export default Info;
