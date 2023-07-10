"use client";
import Link from "next/link.js";
import React from "react";
import { motion } from "framer-motion";
const Email = () => {
  return (
    <motion.div
      className="email"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <Link href="mailto:contact@alimissoum.fr" className="email-link">
        contact@alimissoum.fr
      </Link>
    </motion.div>
  );
};

export default Email;
