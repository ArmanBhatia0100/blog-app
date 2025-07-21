import { useEffect, use } from "react";
import { BlogContext } from "../context/BlogContext";
import { fetchBlogs } from "../api/fetchBlogs";

export function useFetchBlog() {
  const context = use(BlogContext);
  useEffect(() => {
    (async () => {
      const { blogs } = await fetchBlogs();
      context.setBloglist(blogs);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
