import Link from "next/link.js";
import React from "react";

const Button = ({ text, link, down }) => {
  return (
    <a className="btn" href={link} download>
      {text}
    </a>
  );
};

export default Button;
