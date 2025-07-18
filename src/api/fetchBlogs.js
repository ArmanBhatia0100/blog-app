export async function fetchBlogs() {
  try {
    const response = await fetch(
      "https://api.slingacademy.com/v1/sample-data/blog-posts"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.error);
  }
}

