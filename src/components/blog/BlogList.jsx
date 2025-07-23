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
        <p>
          Stay updated with our latest insights, stories, and innovations.
          Explore how we’re shaping the future with every new milestone.
        </p>
      </div>

      {/* Searchbar and button */}
      <div className="m-auto my-4 w-fit text-center">
        <SearchBar />
      </div>

      {/* Blog List */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
