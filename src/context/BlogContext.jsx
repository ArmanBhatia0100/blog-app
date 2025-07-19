import { createContext, useState, useEffect } from "react";
import { fetchBlogs } from "../api/fetchBlogs";

const BlogContext = createContext(null);

function BlogContextProvider({ children }) {
  const [bloglist, setBloglist] = useState([]);
  const [filteredBlogList, setFilterBlogList] = useState([]);

  useEffect(() => {
    (async () => {
      const { blogs } = await fetchBlogs();
      setBloglist(blogs);
      setFilterBlogList(blogs)
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BlogContext.Provider
      value={{ bloglist, filteredBlogList, setFilterBlogList, setBloglist }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export { BlogContext, BlogContextProvider };
