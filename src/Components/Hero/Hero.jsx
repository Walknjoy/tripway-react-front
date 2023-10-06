import './Hero.scss';
import { FaLocationDot } from 'react-icons/fa6';
import Image1 from '../../Media/image/bali.jpg';
import Image2 from '../../Media/image/capadocia.jpg';
import Image3 from '../../Media/image/santorini2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="my-hero-carousel">
      <div className="item">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-3 col-lg-3">
              <div className="left-side" data-aos="fade-right" data-aos-duration="100">
                <h1>Lorem dolor sit.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  amet ut vero deleniti nobis vitae. Odit ratione laudantium,
                </p>
                <button>Explore</button>
              </div>
            </div>
            <div className="col-12 col-xl-8 col-lg-8">
              <div className="right-side">
                <div className="images images-1" data-aos="fade-down" data-aos-duration="180">
                  <img src={Image1} alt="" />
                  <div className="inner_text">
                    <h3>Vorsova</h3>
                    <p>
                      <FaLocationDot />
                      Polsa
                    </p>
                  </div>
                </div>
                <div className="images images-2" data-aos="fade-up" data-aos-duration="200">
                  <img src={Image2} alt="" />
                  <div className="inner_text">
                    <h3>Baku</h3>
                    <p>
                      <FaLocationDot />
                      Azerbaijan
                    </p>
                  </div>
                </div>
                <div className="images images-3" data-aos="fade-up" data-aos-duration="160">
                  <img src={Image3} alt="" />
                  <div className="inner_text">
                    <h3>Istanbul</h3>
                    <p>
                      <FaLocationDot />
                      Turkiye
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
