import BlogList from "../components/blog/BlogList";
import Header from "../components/Header";
import { use } from "react";
import { BlogContext } from "../context/BlogContext";

export default function Home() {
  const constext = use(BlogContext);
  return (
    <>
      <Header>
        <Header.CreateButton></Header.CreateButton>
      </Header>

      {/* Loading state if the list is null */}
      {!constext.filteredBlogList ? (
        <h1 className="top-2/4 left-2/4 absolute font-semibold text-3xl">
          Loading...
        </h1>
      ) : (
        <BlogList />
      )}
    </>
  );
}
