import React, { use, useRef } from "react";
import { BlogContext } from "../context/BlogContext";

const Header = () => {
  const blogSearchRef = useRef(null);
  const context = use(BlogContext);

  function searchHandler() {
    // value from the input field
    const searchValue = blogSearchRef.current.value;
    const filteredList = context.bloglist.filter((blogPost) =>
      blogPost.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    context.setFilterBlogList(filteredList);
  }

  return (
    <header className="flex justify-between items-center bg-white shadow-md px-6 py-4">
      <h1 className="font-bold text-blue-600 text-2xl">Blogger</h1>
      <div className="flex items-center space-x-4">
        <div className="relative flex gap-3">
          <input
            ref={blogSearchRef}
            type="text"
            placeholder="Search posts..."
            className="py-2 pr-4 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={searchHandler}
            type="button"
            class="items-center gap-2.5 bg-white hover:bg-cyan-500/10 px-4 py-2 border border-gray-500/30 hover:border-cyan-500/30 rounded text-gray-800 hover:text-cyan-500 text-sm active:scale-95 transition"
          >
            <svg
              className="top-1/2 left-3 absolute w-5 h-5 text-gray-500 -translate-y-1/2 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Search
          </button>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white transition duration-200">
          Create Post
        </button>
      </div>
    </header>
  );
};

export default Header;
