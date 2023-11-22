import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import './Hotel.scss'
const Hotel = () => {
  const[collabse,setCollabse]=useState(false)
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">

            <div className="photo-gallery">
              <ImageGallery
                items={images}
                showPlayButton={false}
                showFullscreenButton={false}
                slideInterval={1000}
                slideOnThumbnailOver={true}
              />
            </div>
            <div className="hotel-desecription">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati natus tempora harum atque consequatur debitis.
                Non cupiditate quo exercitationem culpa laborum obcaecati quis totam molestias,
                repudiandae ex iure quibusdam, officiis sapiente quas officia. Optio soluta cumque harum,
                distinctio vel vitae asperiores consequuntur dolores animi ab,adipisci ea? 
                <span className={`long-text ${collabse ? "expanded":" "}`}>
                  Atque, quasi alias nostrum saepe voluptates numquam inventore nemo corporis quas! 
                  Quam eius earum voluptatum
                  vero qui eum enim reiciendis reprehenderit tenetur quis commodi sapiente officiis, corrupti
                  ab similique id veniam, cupiditate blanditiis, repellat assumenda labore sed rem?
                  Culpa quos quam totam voluptatum rem maiores dolore, quaerat possimus repudiandae,
                  incidunt aperiam iure molestiae?
                </span>
              </p>
              <button className='view-btn ' onClick={()=>setCollabse((prev)=>!prev)}>{collabse ? "View less" : "View more"}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotel;
