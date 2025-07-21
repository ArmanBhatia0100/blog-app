import React from 'react';

export default function CreatePostForm() {
  return (
    <div className="space-y-4 bg-white shadow-md mx-auto p-6 rounded-2xl max-w-xl">
      <h2 className="mb-4 font-bold text-gray-800 text-2xl">Create New Post</h2>

      <div>
        <label className="block mb-1 font-medium text-gray-700 text-sm">Title</label>
        <input
          type="text"
          className="px-3 py-2 border focus:border-blue-300 rounded-lg focus:outline-none focus:ring w-full"
          placeholder="Enter title"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700 text-sm">Description</label>
        <input
          type="text"
          className="px-3 py-2 border focus:border-blue-300 rounded-lg focus:outline-none focus:ring w-full"
          placeholder="Enter description"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700 text-sm">Content</label>
        <textarea
          rows={5}
          className="px-3 py-2 border focus:border-blue-300 rounded-lg focus:outline-none focus:ring w-full"
          placeholder="Write your content here..."
        ></textarea>
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700 text-sm">Author Name</label>
        <input
          type="text"
          className="px-3 py-2 border focus:border-blue-300 rounded-lg focus:outline-none focus:ring w-full"
          placeholder="Author name"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700 text-sm">Image</label>
        <input
          type="file"
          accept="image/*"
          className="block hover:file:bg-blue-100 file:bg-blue-50 file:mr-4 file:px-4 file:py-2 file:border-0 w-full file:font-semibold text-gray-500 file:text-blue-700 text-sm file:text-sm"
        />
      </div>

      <button
        type="button"
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg w-full text-white transition-colors"
      >
        Post
      </button>
    </div>
  );
}
