import { useEffect, use } from "react";
import "./App.css";
import BlogList from "./components/blog/BlogList";
import Header from "./components/Header";
import { fetchBlogs } from "./api/fetchBlogs";
import { BlogContext } from "./context/BlogContext";

function App() {
  const context = use(BlogContext);
  useEffect(() => {
    (async () => {
      const { blogs } = await fetchBlogs();
      context.setBlogList(blogs);
    })();
  }, []);
  return (
    <>
      <div>
        <Header></Header>
        <BlogList />
      </div>
    </>
  );
}

export default App;
