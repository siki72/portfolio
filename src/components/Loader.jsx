import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
function Loader({ handleLoader, isLoading }) {
  useEffect(() => {
    const loaderShow = () => {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 1900);
      }).then(() => handleLoader());
    };
    loaderShow();
  }, [handleLoader]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motionleave"
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>Logo</title>
            <g>
              <motion.text
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.9 }}
                x="25"
                y="60"
                fill="currentColor"
                fontSize="30"
                fontFamily="Arial"
              >
                A M
              </motion.text>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
              L 11, 27
              L 11, 72
              L 50, 95
              L 89, 73
              L 89, 28 z"
              />
            </g>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
