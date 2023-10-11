import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import {AiOutlineComment, AiOutlineUser} from "react-icons/ai"
const BlogCard = () => {
  const optionsDeal = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3500,
    margin: 20,
    autoplayHoverPause: true,
    center: false,
    responsiveClass: true,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      575: {
        items: 1,
        dots: true,
      },
      992:{
        items: 2,
        dots: true,
      },
      1400: {
        items: 2,
        dots: true,
      },
    },
  };
  return (
    <OwlCarousel {...optionsDeal} className="owl-theme deals-carousel">
      <div className="item">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6">
            <figure className="deals-image">
              <img
                src="https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img1410300.jpeg"
                alt=""
              />
            </figure>
          </div>
          <div className="col-12 col-lg-6 col-md-6">
            <article className="deals-content">
              <div className="addition">Lorem, ipsum.</div>
              <h3>
                <Link to="">Earning Asiana Club Miles Just Got Easier!</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                soluta totam libero non doloribus perferendis officia obcaecati
                inventore quis consequuntur.
              </p>
              <ul className="blog_list">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                   >
                    <path d="M19.5,2h-1.5V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5H7V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5h-1.5C2.02,2,0,4.02,0,6.5v13c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V6.5c0-2.48-2.02-4.5-4.5-4.5Zm-8,7v4H7v-4h4.5Zm5.5,0v4h-4.5v-4h4.5Zm6,0v4h-5v-4h5ZM6,13H1v-4H6v4Zm-5,1H6v4H1v-4Zm6,0h4.5v4H7v-4Zm4.5,5v4H7v-4h4.5Zm1,0h4.5v4h-4.5v-4Zm0-1v-4h4.5v4h-4.5Zm5.5-4h5v4h-5v-4ZM4.5,3h15c1.93,0,3.5,1.57,3.5,3.5v1.5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5ZM1,19.5v-.5H6v4h-1.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5h-1.5v-4h5v.5c0,1.93-1.57,3.5-3.5,3.5Z" />
                  </svg>
                  <span> {dayjs(new Date()).format('MM/D/YYYY')}</span>
                </li>
                <li>
                  <AiOutlineUser/>
                  <span>by <b>admin</b></span>
                </li>
                <li>
                  <AiOutlineComment/>
                  <span>0</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6">
            <figure className="deals-image">
              <img
                src="https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img1410300.jpeg"
                alt=""
              />
            </figure>
          </div>
          <div className="col-12 col-lg-6 col-md-6">
            <article className="deals-content">
              <div className="addition">Lorem, ipsum.</div>
              <h3>
                <Link to="">Earning Asiana Club Miles Just Got Easier!</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                soluta totam libero non doloribus perferendis officia obcaecati
                inventore quis consequuntur.
              </p>
              <ul className="blog_list">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                   >
                    <path d="M19.5,2h-1.5V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5H7V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5h-1.5C2.02,2,0,4.02,0,6.5v13c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V6.5c0-2.48-2.02-4.5-4.5-4.5Zm-8,7v4H7v-4h4.5Zm5.5,0v4h-4.5v-4h4.5Zm6,0v4h-5v-4h5ZM6,13H1v-4H6v4Zm-5,1H6v4H1v-4Zm6,0h4.5v4H7v-4Zm4.5,5v4H7v-4h4.5Zm1,0h4.5v4h-4.5v-4Zm0-1v-4h4.5v4h-4.5Zm5.5-4h5v4h-5v-4ZM4.5,3h15c1.93,0,3.5,1.57,3.5,3.5v1.5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5ZM1,19.5v-.5H6v4h-1.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5h-1.5v-4h5v.5c0,1.93-1.57,3.5-3.5,3.5Z" />
                  </svg>
                  <span> {dayjs(new Date()).format('MM/D/YYYY')}</span>
                </li>
                <li>
                  <AiOutlineUser/>
                  <span>by <b>admin</b></span>
                </li>
                <li>
                  <AiOutlineComment/>
                  <span>0</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6">
            <figure className="deals-image">
              <img
                src="https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img1410300.jpeg"
                alt=""
              />
            </figure>
          </div>
          <div className="col-12 col-lg-6 col-md-6">
            <article className="deals-content">
              <div className="addition">Lorem, ipsum.</div>
              <h3>
                <Link to="">Earning Asiana Club Miles Just Got Easier!</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                soluta totam libero non doloribus perferendis officia obcaecati
                inventore quis consequuntur.
              </p>
              <ul className="blog_list">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                   >
                    <path d="M19.5,2h-1.5V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5H7V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5h-1.5C2.02,2,0,4.02,0,6.5v13c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V6.5c0-2.48-2.02-4.5-4.5-4.5Zm-8,7v4H7v-4h4.5Zm5.5,0v4h-4.5v-4h4.5Zm6,0v4h-5v-4h5ZM6,13H1v-4H6v4Zm-5,1H6v4H1v-4Zm6,0h4.5v4H7v-4Zm4.5,5v4H7v-4h4.5Zm1,0h4.5v4h-4.5v-4Zm0-1v-4h4.5v4h-4.5Zm5.5-4h5v4h-5v-4ZM4.5,3h15c1.93,0,3.5,1.57,3.5,3.5v1.5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5ZM1,19.5v-.5H6v4h-1.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5h-1.5v-4h5v.5c0,1.93-1.57,3.5-3.5,3.5Z" />
                  </svg>
                  <span> {dayjs(new Date()).format('MM/D/YYYY')}</span>
                </li>
                <li>
                  <AiOutlineUser/>
                  <span>by <b>admin</b></span>
                </li>
                <li>
                  <AiOutlineComment/>
                  <span>0</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default BlogCard;
