export function searchBlogFromParam(blogID, blogList) {
  // Find the blog from the bloglist, if found then store blog otherwise undefined
  const blog = blogList.find((blog) => Number(blog.id) === Number(blogID));

  console.log(blog);

  // type: blog | undefined
  return blog;
}
