import React from 'react';
import { BsSearch } from 'react-icons/bs';
import "./SearchingBlog.scss"
const SearchingBlog = () => {
  return (
    <div className="searching_blog_area">
      <form action="">
        <input type="text"  placeholder='Search...'/>
        <button type='button'><BsSearch/></button>
      </form>
    </div>
  );
};

export default SearchingBlog;
