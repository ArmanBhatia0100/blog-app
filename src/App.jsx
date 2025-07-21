import { use } from "react";
import "./App.css";
import BlogList from "./components/blog/BlogList";
import Header from "./components/Header";
import { useFetchBlog } from "./hooks/useFetchBlog";
import { BlogContext } from "./context/BlogContext";
import CreatePostForm from "./pages/CreatePostForm";

function App() {
  const constext = use(BlogContext);
  useFetchBlog();
  return (
    <>
      <div>
        <Header></Header>

        {/* Loading state if the list is null */}
        {!constext.filteredBlogList ? (
          <h1 className="top-2/4 left-2/4 absolute font-semibold text-3xl">
            Loading...
          </h1>
        ) : (
          <BlogList />
        )}
      </div>
    </>
  );
}

export default App;
