import React from "react";

// BlogCard component for individual blog cards
const BlogCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-md mx-auto mb-6 p-6 rounded-lg w-96">
      <h2 className="mb-2 font-bold text-blue-600 text-xl">{title}</h2>
      <img
        src={image}
        alt={title}
        className="mb-4 rounded-md w-full h-48 object-cover"
      />

      <p className="text-gray-600 line-clamp-3">{description}</p>
    </div>
  );
};

export default BlogCard;
