import React from "react";

const Searchbox = ({ searchange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Find Your Robot"
        onChange={searchange}
      />
    </div>
  );
};

export default Searchbox;
