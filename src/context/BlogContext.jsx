import { createContext, useState, useEffect } from "react";
import { fetchBlogs } from "../api/fetchBlogs";

const BlogContext = createContext(null);

function BlogContextProvider({ children }) {
  const [bloglist, setBloglist] = useState(null);
  const [filteredBlogList, setFilterBlogList] = useState(null);

  useEffect(() => {
    (async () => {
      // Fetching all the blogs from the api
      const { blogs } = await fetchBlogs();

      // This bloglist will be stay constant after the first fetch.
      // Used for searchPost Feature
      setBloglist(blogs);

      // This will be the filtered list after the user search for a post through header.
      setFilterBlogList(blogs);
    })();

    // There is not dependance and effect will run only one time at initailzation
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
