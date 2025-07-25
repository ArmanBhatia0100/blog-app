import "./App.css";
import { useFetchBlog } from "./hooks/useFetchBlog";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import CreatePostForm from "./pages/CreatePostForm";
import BlogPostDetail from "./pages/BlogDetailPage";

// TODO: detailed post page.

function App() {
  useFetchBlog();
  return (
    <>
      <div className="bg-slate-50">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="createPost" element={<CreatePostForm />}></Route>
            <Route path="blogs/:blogID" element={<BlogPostDetail />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
