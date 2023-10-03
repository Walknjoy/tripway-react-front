import React from 'react';
import './BlogPageCard.css';
import { Link } from 'react-router-dom';
const BlogPageCard = () => {
  return (
    <section className="blog_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-3 col-md-4 col-sm-6">
            <div class="blog_card">
                <img
                  class="card__background"
                  src="https://i.imgur.com/QYWAcXk.jpeg"
                  alt=""
                />
              <div class="card__content | flow">
                <div class="card__content--container | flow">
                  <h2 class="card__title">Colombia</h2>
                  <p class="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rerum in labore laudantium deserunt fugiat numquam.
                  </p>
                </div>
                <Link to="" class="card__button">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-4 col-sm-6">
            <article class="blog_card">
              <img
                class="card__background"
                src="https://i.imgur.com/QYWAcXk.jpeg"
                alt=""
              />
              <div class="card__content | flow">
                <div class="card__content--container | flow">
                  <h2 class="card__title">Colombia</h2>
                  <p class="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rerum in labore laudantium deserunt fugiat numquam.
                  </p>
                </div>
                <Link to="" class="card__button">
                  Read more
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPageCard;
