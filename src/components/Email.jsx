import Link from "next/link.js";
import React from "react";

const Email = () => {
  return (
    <div className="email">
      <Link href="mailto:contact@alimissoum.fr" className="email-link">
        contact@alimissoum.fr
      </Link>
    </div>
  );
};

export default Email;
