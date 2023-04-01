import React from 'react';
import {Link} from 'react-router-dom';

const BlogsList = ({ blogs, title }) => {
  return (
    <div>
      <h2 className='title'>{ title }</h2>
      {blogs.map((blog)=>(
        <div className='blog-con' key={blog.id}>
        <Link to={`blogs/${blog.id}`}>
        <h2 className='h2'>{blog.title}</h2>
        <p className='blog-p'>Writen by {blog.author}</p>
        </Link>
        </div>
        ))}
    </div>
  );
}

export default BlogsList;
