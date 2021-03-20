import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={() => setSelectedImg(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img src={selectedImg} alt="image enlarged" />
    </motion.div>
  );
};

export default Modal;
