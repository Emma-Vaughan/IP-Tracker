import { api } from "../../API";
import { useEffect, useState } from "react";

function Search({ setData }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://geo.ipify.org/api/v1?apiKey=" + api + "&ipAddress=")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  function handleClick(e) {
    e.preventDefault();
    fetch("https://geo.ipify.org/api/v1?apiKey=" + api + "&ipAddress=" + input)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }

  return (
    <div className="search">
      <input
        type="text"
        id="searchBar"
        placeholder="Search for any IP address or domain"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick} className="button">
        >
      </button>
    </div>
  );
}

export default Search;
