import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Icon(props: any) {
  const { classes, url, i } = props;
  return (
    <motion.div
      initial={{ scale: 0, y: 10 * 0.5 * i ?? 1 }}
      animate={{ scale: 1, y: 0 }}
      whileHover={{ scale: 1.2 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5, delay: i * 0.2 }}
      className="scale-100"
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={url}
        className=" rounded-full p-2 m-2 border-[0.6px] transition-all 
        ease-in-out border-slate-400 group
          hover:bg-blue-100 hover:border-blue-300"
      >
        <motion.i
          className={
            classes + ` group-hover:text-blue-700 group-hover:scale-110`
          }
        ></motion.i>
      </a>
    </motion.div>
  );
}
