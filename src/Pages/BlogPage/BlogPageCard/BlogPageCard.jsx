import React from 'react';
import './BlogPageCard.scss';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
const BlogPageCard = ({ data }) => {
  console.log(data);
  return (
    <Link to={`/blog/${data?.title}`} className="blog_card">
      <div className="blog_card_figure">
        <img src={data?.img} alt={data?.title} />
      </div>
      <div className="blog_card_body">
        <h3 title={data?.desc}>{data?.title}</h3>
        <ul>
          <li>
            <span>{dayjs(data?.createdAt).format('MMM,DD,YYYY')}</span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span>{data?.city}</span>
          </li>
        </ul>
        <p>{data?.desc}</p>
      </div>
    </Link>
  );
};

export default BlogPageCard;
