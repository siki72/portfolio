import Link from "next/link.js";
import React from "react";

const Button = ({ text, link }) => {
  return (
    <Link className="btn" href={link}>
      {text}
    </Link>
  );
};

export default Button;
