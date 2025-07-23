import React, { use, useRef } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { BlogContext } from "../context/BlogContext";
import Header from "../components/Header";

/**
 *
 * TODO: Create a custom post
 *  1. Get form data
 *  2. fn to send the data to filterBlog list
 */

export default function CreatePostForm() {
  const context = use(BlogContext);

  // Ref for fetching information from the form
  const titleRef = useRef();
  const descRef = useRef();
  const contentRef = useRef();
  const authorRef = useRef();
  const imageRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const title = titleRef.current.value;
    const desc = descRef.current.value;
    const content = contentRef.current.value;
    const author = authorRef.current.value;
    const image = imageRef.current.value;

    const newBlog = {
      id: uuidv4(),
      title: title,
      content_text: content,
      photo_url: image,
      description: desc,
      author: author,
    };
    context.setFilterBlogList((prev) => [newBlog, ...prev]);

    titleRef.current.value =
      descRef.current.value =
      contentRef.current.value =
      authorRef.current.value =
      imageRef.current.value =
        "";
  }

  return (
    <div>
      <Header></Header>

      {/* back button */}
      <div className="flex flex-col justify-center items-center bg-slate-50 mt-8 h-screen">
        <Link to="/" className="self-start shadow-sm ml-6 p-2 border-gray-400 rounded-md text-gray-900">
          &larr; Back To Blogs
        </Link>

      {/* Input form */}
        <div className="space-y-4 bg-white shadow-md mx-auto p-6 rounded-2xl min-w-[60vw] max-w-xl">
          <h2 className="mb-4 font-bold text-gray-800 text-2xl">
            Create New Post
          </h2>
          <form onSubmit={submitHandler} className="flex flex-col gap-3">
            <div>
              <label className="block mb-1 font-medium text-gray-700 text-sm">
                Title
              </label>
              <input
                ref={titleRef}
                type="text"
                className="px-3 py-2 border focus:border-blue-300 rounded-lg focus:outline-none focus:ring w-full"
                placeholder="Enter title"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 text-sm">
                Description
              </label>
              <input
                ref={descRef}
                type="text"
                className="px-3 py-2 border focus:border-blue-300 rounded-lg focus:outline-none focus:ring w-full"
                placeholder="Enter description"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 text-sm">
                Content
              </label>
              <textarea
                ref={contentRef}
                rows={5}
                className="px-3 py-2 border focus:border-blue-300 rounded-lg focus:outline-none focus:ring w-full"
                placeholder="Write your content here..."
              ></textarea>
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 text-sm">
                Author Name
              </label>
              <input
                ref={authorRef}
                type="text"
                className="px-3 py-2 border focus:border-blue-300 rounded-lg focus:outline-none focus:ring w-full"
                placeholder="Author name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 text-sm">
                Image
              </label>
              <input
                ref={imageRef}
                type="file"
                accept="image/*"
                className="block hover:file:bg-blue-100 file:bg-blue-50 file:mr-4 file:px-4 file:py-2 file:border-0 w-full file:font-semibold text-gray-500 file:text-blue-700 text-sm file:text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg w-full text-white transition-colors"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
