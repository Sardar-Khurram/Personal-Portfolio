import React from "react";
import { useParams } from "react-router-dom";

// Import all markdown files dynamically
const blogs = import.meta.glob("../content/*.md", { eager: true });

const BlogPost = () => {
  const { slug } = useParams();

  // Find the specific blog by slug
  const blog = Object.values(blogs).find(
    (blog) => blog.frontmatter.slug === slug
  );

  if (!blog) return <div>Blog not found!</div>;

  const { frontmatter, default: content } = blog;
  const { title, author, date, image } = frontmatter;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {author} on {new Date(date).toLocaleDateString()}
      </p>
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-md"
      />
      <div
        className="prose mt-6"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default BlogPost;
