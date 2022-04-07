import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// custom stuff
import { useFetch } from "../hooks/useFetch";
import { useAdminContext } from "../hooks/useAdminContext";
// styles
import "./Info.css";

const Info = () => {
  const navigate = useNavigate();
  // states
  const [form, setForm] = useState(false);
  const [password, setPassword] = useState("");
  // custom stuff
  const { data, error, isPending, postData } = useFetch("/api/v1/admin");
  const { dispatch } = useAdminContext();

  console.log({ data });

  useEffect(() => {
    if (data) {
      localStorage.setItem("userData", JSON.stringify(data));
      navigate("/admin");
    }
  }, [data, navigate]);

  return (
    <div className="info">
      <article className="info__about">
        Hi! I am a freelance graphic designer with a passion for editorial
        design. In my many years working for various publishing houses, I always
        loved content-driven visual concepts. I believe in the power of flashy
        yet smart designs but always with precision and high quality. While Im
        trying to take myself not too serious I take the needs of my clients
        very seriously. I am always interested in collaborations and freelance
        opportunities. Just say hi!
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
        <p>
          die Zeit, ZeitLeo, Zeit Campus, Emotion, WALDEN, BEEFI, Neon,Working
          Women, GEOLino, Finanzielle, Girlpower, Zeit Stiftung, Essen&Trinken,
          HoheLuft, Cornelia Poletto Magazin
        </p>
      </article>

      <div className="info__admin">
        {form && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("inside submit");
              postData({ password });
              dispatch({ type: "LOGIN" });
              setForm(false);
            }}
          >
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </form>
        )}
        {error && !form && <p>{error}</p>}
        {isPending && !form && <p>loading...</p>}
        <button
          onClick={() => {
            setForm(!form);
          }}
        >
          AF
        </button>
      </div>
    </div>
  );
};

export default Info;
