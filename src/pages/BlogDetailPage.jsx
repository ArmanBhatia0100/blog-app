import React from "react";

const BlogPostDetail = () => {
  return (
    <div className="mx-auto px-4 py-8 max-w-4xl">
      <button
        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 shadow mb-6 px-4 py-2 rounded-lg font-semibold text-white text-sm transition"
        onClick={() => window.history.back()}
      >
        ← Go Back
      </button>

      <div className="bg-white shadow-lg p-6 rounded-2xl">
        <h1 className="mb-4 font-extrabold text-gray-900 text-4xl leading-tight">
          Blog Post Title Goes Here
        </h1>
        <p className="mb-6 text-gray-500 text-sm">By John Doe</p>

        <div className="mb-6">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Blog post cover"
            className="shadow-md rounded-xl w-full h-auto"
          />
        </div>

        <div className="max-w-none text-gray-800 prose prose-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam.
          </p>
          <p>
            Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
          </p>
          <p>
            Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum
            augue. Praesent egestas leo in pede. Praesent blandit odio eu enim.
            Pellentesque sed dui ut augue blandit sodales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
