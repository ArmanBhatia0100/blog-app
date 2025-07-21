import { use } from "react";
import "./App.css";
import BlogList from "./components/blog/BlogList";
import Header from "./components/Header";
import { useFetchBlog } from "./hooks/useFetchBlog";
import { BlogContext } from "./context/BlogContext";

function App() {
  const constext = use(BlogContext);
  useFetchBlog();
  return (
    <>
      <div>
        <Header></Header>

        {/* Loading state if the list is null */}
        {!constext.filteredBlogList ? <h1>Loading</h1> : <BlogList />}
      </div>
    </>
  );
}

export default App;
