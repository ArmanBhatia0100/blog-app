import { use } from "react";
import BlogCard from "./BlogCard";
import { BlogContext } from "../../context/BlogContext";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

const BlogList = () => {
  const context = use(BlogContext);
  return (
    <div className="mx-auto px-4 py-8 container">
      <div className="m-auto my-4 w-fit text-center">
        {/* Headings */}
        <h1>Discover Our Latest News</h1>
        <p className="text-gray-600">
          Stay updated with our latest insights, stories, and innovations.
          Explore how we’re shaping the future with every new milestone.
        </p>
      </div>

      {/* Searchbar and button */}
      <div className="m-auto my-4 mb-8 w-fit text-center">
        <SearchBar />
      </div>

      {/* Seperator line and text */}
      <div className="flex flex-row justify-center items-center mb-6">
        <h4 className="mr-5 font-semibold text-gray-700 text-2xl text-nowrap">
          Remarkable Boards
        </h4>
        <div className="border-t-2 w-full" />
      </div>

      {/* Blog List */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {context.filteredBlogList && context.filteredBlogList.length >= 1 ? (
          context.filteredBlogList.map((blog) => (
            <Link to={`blogs/${blog.id}`}>
              <BlogCard
                key={blog.id}
                // author={blog.author}
                image={blog.photo_url}
                title={blog.title}
                description={blog.description}
              />
            </Link>
          ))
        ) : (
          <h1 className="font-bold text-2xl">No Blog Found</h1>
        )}
      </div>
    </div>
  );
};

export default BlogList;
