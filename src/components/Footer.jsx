import React from "react";

var date = new Date();
var year = date.getFullYear();

// console.log(year);

function Footer() {
  return (
    <footer>
      <p>Copywright @ {year}</p>
    </footer>
  );
}

export default Footer;
