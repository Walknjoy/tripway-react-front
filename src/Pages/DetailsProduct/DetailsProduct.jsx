import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
const DetailsProduct = () => {
  const { type, name } = useParams();
  console.log(type);
  const [collabse, setCollabse] = useState(false);

  useEffect(() => {
    console.log('Type:', type);
    console.log('Name:', name);
  }, [type, name]);
  return (
    <main id="main">
      <section id="detailsProduct">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="photo-gallery">
                <ImageGallery
                  showPlayButton={false}
                  showFullscreenButton={false}
                  slideInterval={1000}
                  slideOnThumbnailOver={true}
                />
              </div>
              <div className="hotel-desecription">
                <p className={`${collabse ? '' : 'text_opacity'}`}></p>
                <button
                  className="view-btn "
                  onClick={() => setCollabse((prev) => !prev)}>
                  {collabse ? 'View less' : 'View more'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailsProduct;
