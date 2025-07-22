import React, { use } from "react";
import { useParams } from "react-router-dom";
import { searchBlogFromParam } from "../util/searchBlogUtil";
import { BlogContext } from "../context/BlogContext";
import parse from "html-react-parser";

const BlogPostDetail = () => {
  const context = use(BlogContext);
  const { blogID } = useParams();
  const blog = searchBlogFromParam(blogID, context.filteredBlogList);

  return (
    <div className="mx-auto px-4 py-8 max-w-4xl">
      <button
        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 shadow mb-6 px-4 py-2 rounded-lg font-semibold text-white text-sm transition"
        onClick={() => window.history.back()}
      >
        ← Go Back
      </button>

      <div className="bg-white shadow-lg p-6 rounded-2xl">
        <h1 className="mb-4 font-extrabold text-gray-900 text-4xl leading-tight">
          Blog Post Title Goes Here
          {blog.title}
        </h1>
        <p className="mb-6 text-gray-500 text-sm">By John Doe</p>

        <div className="mb-6">
          <img
            src={blog.photo_url}
            alt="Blog post cover"
            className="shadow-md rounded-xl w-full h-auto"
          />
        </div>

        <div className="max-w-none text-gray-800 prose prose-lg">
          {parse(blog.content_html)}
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
