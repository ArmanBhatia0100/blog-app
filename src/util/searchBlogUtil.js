export function searchBlogFromParam(blogID, blogList) {
  // Find the blog from the bloglist, if found then store blog otherwise undefined
  const blog = blogList.find((blog) => String(blog.id) === String(blogID));

  console.log(blog);

  // type: blog | undefined
  return blog;
}
