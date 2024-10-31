import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  return (
    <div className=" flex  flex-col  pb-[0.5rem] ">
        <NavLink to={`/blog/${post.id}`}>
          <span className="  font-extrabold opacity-90 font-sans text-md hover:border-b-[2px]  border-neutral-300 border-dashed">{post.title}</span>
        </NavLink>
      <p className=" font-medium text-sm opacity-80" >
        By
          <span className=" italic"> {post.author}</span>
        on{" "}
          <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className="opacity-80 font-bold  border-dashed border-b-2 border-neutral-400 ">{post.category}</span>
          </NavLink>
      </p>
      <p className=" text-sm pb-2 font-medium ">Posted on {post.date}</p>
      <p className=" pt-2 text-sm  font-medium opacity-90 ">{post.content}</p>
      <div className=" flex gap-1  underline text-blue-800   font-semibold   text-[0.85rem]  pt-1 pb-8">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className=" px-[0.5px]">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
