import { useState, useEffect } from "react";
import "./QuoteMachine.css";

export default function QuoteMachine() {
  const [quote, setQuote] = useState("");
  const [character, setCharacter] = useState("");

  useEffect(() => {
    fetch("https://southparkquotes.onrender.com/v1/quotes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data[0].quote);
        setQuote(data[0].quote);
        setCharacter(data[0].character);
      });
  }, []);

  const handleClick = () => {
    fetch("https://southparkquotes.onrender.com/v1/quotes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data[0].quote);
        setQuote(data[0].quote);
        setCharacter(data[0].character);
      });
  };

  return (
    <div id="quote-box">
      <h1>South Park Quote of the day</h1>
      <h2 id="text">{quote}</h2>
      <p id="author">{character}</p>
      <button id="new-quote" onClick={handleClick}>
        change Quote
      </button>
      <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
        <img id="twitter-logo" src="https://www.blackswampfest.org/graphics/images/social/icon-twitter.jpg" alt="twitter-logo" />
      </a>
    </div>
  );
}
