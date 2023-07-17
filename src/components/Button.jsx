import Link from "next/link.js";
import React from "react";

const Button = ({ text, link, down }) => {
  return down === true ? (
    <a className="btn" href={link} download>
      {text}
    </a>
  ) : (
    <Link className="btn" href={link}>
      {text}
    </Link>
  );
};

export default Button;
