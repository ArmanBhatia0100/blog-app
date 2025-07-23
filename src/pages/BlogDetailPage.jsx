import React, { use } from "react";
import { useParams } from "react-router-dom";
import { searchBlogFromParam } from "../util/searchBlogUtil";
import { BlogContext } from "../context/BlogContext";
import parse from "html-react-parser";

const BlogPostDetail = () => {
  const context = use(BlogContext);
  const { blogID } = useParams();
  const blog = searchBlogFromParam(blogID, context.filteredBlogList);

  function splitIntoHeading(text) {
    // split the sentances
    const sentences = text.split(".");

    // get the first sentance
    const HeadingSentance = sentences[0].trim();

    // Combine the rest as paragraph
    const paragraph = sentences.slice(1).join(".").trim().split(".");
    console.log(paragraph);
    // Create an Array

    for (let i = 0; i < paragraph.length; i++) {

      // if totol lines are even 
        if (i % 18 == 0) {
          paragraph.splice(
            i,
            0,
            <div>
              <br></br>
              <br></br>
            </div>
          );
        }

      
    }

    return [HeadingSentance, paragraph];
  }
  const [HeadingSentance, paragraph] = splitIntoHeading(blog.content_text);

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
          {BlogPostDetail.content_html ? (
            parse(blog.content_html)
          ) : (
            <div>
              <h2>{HeadingSentance}</h2>
              <p>{paragraph}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
