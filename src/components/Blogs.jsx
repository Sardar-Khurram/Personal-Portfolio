import React from "react";
import { Link } from "react-router-dom";

// Import all markdown files dynamically
const blogs = import.meta.glob("../content/*.md", { eager: true });

const BlogList = () => {
  // Parse all blog files
  const parsedBlogs = Object.keys(blogs).map((key) => {
    const blog = blogs[key];
    return {
      ...blog.frontmatter,
      content: blog.default,
    };
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {parsedBlogs.map((blog) => (
          <div key={blog.slug} className="p-4 border rounded-lg shadow">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{blog.title}</h2>
            <p className="text-gray-600 mt-2">{blog.description}</p>
            <Link
              to={`/blog/${blog.slug}`}
              className="text-blue-500 underline mt-4 block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
