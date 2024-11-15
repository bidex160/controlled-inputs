import { useState } from "react"
import {text as data} from "./../data"
import { nanoid } from "nanoid"
const InputChallenge = () => {
    const [count, setCount] = useState(0)
    const [texts, setTexts] = useState([]);

   const handleSubmit = (ev) => {
       ev.preventDefault();
          let amount = parseInt(count);
          setTexts(data.slice(0, amount));
    }
    
    return (
      <section className="section-center">
        <form onSubmit={handleSubmit} className="lorem-form">
          <h4>TIRED OF BORING LOREPSUM</h4>
          <label htmlFor="amount">paragraphs:</label>

          <input
            type="number"
            name="amount"
            id="amount"
            min="1"
            step="1"
            max="8"
            value={count}
            onChange={(ev) => setCount(ev.target.value)}
          />

          <button className="btn" type="submit">
            generate
          </button>
        </form>
        <article className="lorem-text">
          {texts.map((item) => {
            return <p key={nanoid()}>{item}</p>;
          })}
        </article>
      </section>
    );
}

export default InputChallenge