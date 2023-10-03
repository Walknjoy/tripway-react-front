import React from 'react'
import './TeamMembers.scss'
import member1 from '../../../Media/team-1.jpg'
import { FaInstagram,  FaLinkedinIn } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { Link } from 'react-router-dom'
const TeamMembers = () => {
    return (
        <section id='our-team'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="team-title">
                            <span>Team</span>
                            <h2>Meet Our Expert</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium</p>
                        </div>
                    </div>
                </div>
                <div className="team">
                    <div className="row">
                        <div className="col-12 col-lg-3 col-md-6">
                            <div className="team-members">
                                <div className="members-img">
                                    <img src={member1} alt="team-member" />
                                    <div className="img-overlay">
                                        <ul>
                                            <li><Link to=''><ImFacebook /></Link></li>
                                            <li><Link to=''><FaInstagram /></Link></li>
                                            <li><Link to=''><FaLinkedinIn /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="members-title">
                                    <h4>John Smith</h4>
                                    <span>Product Designer</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-lg-3 col-md-6">
                            <div className="team-members">
                                <div className="members-img">
                                    <img src={member1} alt="team-member" />
                                    <div className="img-overlay">
                                        <ul>
                                            <li><Link to=''><ImFacebook /></Link></li>
                                            <li><Link to=''><FaInstagram /></Link></li>
                                            <li><Link to=''><FaLinkedinIn /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="members-title">
                                    <h4>John Smith</h4>
                                    <span>Product Designer</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-lg-3 col-md-6">
                            <div className="team-members">
                                <div className="members-img">
                                    <img src={member1} alt="team-member" />
                                    <div className="img-overlay">
                                        <ul>
                                            <li><Link to=''><ImFacebook /></Link></li>
                                            <li><Link to=''><FaInstagram /></Link></li>
                                            <li><Link to=''><FaLinkedinIn /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="members-title">
                                    <h4>John Smith</h4>
                                    <span>Product Designer</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-lg-3 col-md-6">
                            <div className="team-members">
                                <div className="members-img">
                                    <img src={member1} alt="team-member" />
                                    <div className="img-overlay">
                                        <ul>
                                            <li><Link to=''><ImFacebook /></Link></li>
                                            <li><Link to=''><FaInstagram /></Link></li>
                                            <li><Link to=''><FaLinkedinIn /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="members-title">
                                    <h4>John Smith</h4>
                                    <span>Product Designer</span>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamMembers