import React from "react";

function Search({handleSearch}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearch} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;


//- Allow users to search a Pokemon by its name in order to narrow down the cards
//shown on the page