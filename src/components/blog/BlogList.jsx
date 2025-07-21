import { use } from "react";
import BlogCard from "./BlogCard";
import { BlogContext } from "../../context/BlogContext";

const BlogList = () => {
  const context = use(BlogContext);
  return (
    <div className="mx-auto px-4 py-8 container">
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        { context.filteredBlogList && context.filteredBlogList.length >= 1 ? (
          context.filteredBlogList.map((blog) => (
            <BlogCard
              key={blog.id}
              // author={blog.author}
              image={blog.photo_url}
              title={blog.title}
              description={blog.description}
            />
          ))
        ) : (
          <h1 className="font-bold text-2xl">No Blog Found</h1>
        )}
      </div>
    </div>
  );
};

export default BlogList;
