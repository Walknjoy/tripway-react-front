import React from 'react'
import Teamwork from '../../../Media/about-img.png'
import './OurExperience.scss'
const OurExperience = () => {
    return (
        <section id='our_experience'>
            <div className="experience">
                <div className="img-side">
                    <div className="experience-img">
                        <img src={Teamwork} alt="teamwork" />
                        <div className="col-12 col-lg-6 col-md-12">
                            <div className="left-side">
                                <h3>5 Year Of Working Experience</h3>
                                <p>We Crafted an aweso design library that is robust and intuitive to use.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-xl-10 col-md-12">
                                <div className="experience-content">
                                    <div className="content-title">
                                        <span>About us</span>
                                        <h2>Built-With Boostrap 5, a New Experiance</h2>
                                    </div>
                                    <div className="content-description">
                                        <div className="description-up">
                                            <p>We Crafted an awesome design library that is robust and intuitive to use. No matter you're building a business
                                                presentation websit or a complex web application our design</p>
                                        </div>
                                        <div className="description-down">
                                            <div className="counter">
                                                <span>30k</span>
                                                <h4>Happy Client</h4>
                                                <p>We Crafted an awesome design library that is robust and</p>
                                            </div> <div className="counter">
                                                <span>30k</span>
                                                <h4>Happy Client</h4>
                                                <p>We Crafted an awesome design library that is robust and</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurExperience