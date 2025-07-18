import { use } from "react";
import BlogCard from "./BlogCard";
import { BlogContext } from "../../context/BlogContext";

const BlogList = () => {
  const context = use(BlogContext);

  // Sample blog data with placeholder images
  //   const blogs = [
  //     {
  //       id: 1,
  //       author: "Jane Doe",
  //       image: "https://placehold.co/300x200?text=Mountains",
  //       title: "Exploring the Mountains",
  //       description:
  //         "A thrilling adventure through the rugged peaks and serene valleys, capturing the beauty of nature in every step.",
  //     },
  //     {
  //       id: 2,
  //       author: "John Smith",
  //       image: "https://placehold.co/300x200?text=Tech",
  //       title: "Tech Trends 2025",
  //       description:
  //         "An in-depth look at the emerging technologies shaping the future, from AI to quantum computing.",
  //     },
  //     {
  //       id: 3,
  //       author: "Emily Johnson",
  //       image: "https://placehold.co/300x200?text=Baking",
  //       title: "The Art of Baking",
  //       description:
  //         "Discover the secrets to perfect pastries and breads with time-tested recipes and techniques.",
  //     },
  //   ];

  return (
    <div className="mx-auto px-4 py-8 container">
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {context.blogList.map((blog) => (
          <BlogCard
            key={blog.id}
            // author={blog.author}
            image={blog.photo_url}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
