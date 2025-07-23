import { useEffect, useState } from "react";
import React from "react";

const BlogCard = ({title, description }) => {
  
  // This is generate a random color for the background 
  const [randomColor, setRandomColor] = useState("FFF");
  useEffect(function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setRandomColor(color);
  }, []);


  return (
    <div
      className={`bg-white shadow-lg mx-auto mb-6 p-6 px-18 bg-origin-padding rounded-lg w-72 h-96 bg-center bg-cover bg-no-repeat`}
      style={{ background: randomColor }}
    >
      <h2 className="mb-2 font-bold text-slate-100 text-2xl">{title}</h2>
      <p className="font-medium text-slate-200 line-clamp-3">{description}</p>
    </div>
  );
};

export default BlogCard;
