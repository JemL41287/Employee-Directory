import React from "react";


function Search(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label>Search:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="Employees"
          type="text"
          className="form-control"
          placeholder="Type in an employee name to search..."
          id="index"
        />
      </div>
    </form>
  );
}

export default Search;