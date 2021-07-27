import { api } from "../../API";

function Search({ setData }) {
  function handleClick(e) {
    e.preventDefault();
    fetch("https://geo.ipify.org/api/v1?apiKey=" + api + "&ipAddress=")
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
      />
      <button onClick={handleClick} className="button">
        >
      </button>
    </div>
  );
}

export default Search;
