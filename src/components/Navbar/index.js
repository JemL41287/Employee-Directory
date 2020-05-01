import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
      <nav className="navbar-expand-lg navb">
          <h1>Employee Directory</h1>
          <p>To navigate, either sort by name or utilize search to narrow results</p>
      </nav>

  );
}

export default Navbar;