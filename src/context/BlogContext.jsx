import { createContext, useState } from "react";

const BlogContext = createContext(null);

function BlogContextProvider({ children }) {
  const [bloglist, setBlogList] = useState([]);

  return (
    <BlogContext.Provider value={{ blogList: bloglist, setBlogList }}>
      {children}
    </BlogContext.Provider>
  );
}

export { BlogContext, BlogContextProvider };
