export function searchBlogs(blogsArray, searhedName) {
  const searchedPost = blogsArray.filter((blog) =>
    blog.title.includes(searhedName)
  );
  return searchedPost;
}
