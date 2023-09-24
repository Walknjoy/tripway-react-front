import React from 'react'
import './Collaborateus.scss'
const Collaborateus = () => {
    return (
        <section id='collaborate'>
            <div className="container">
                <div className="row">
                    <div className="collaborateus">
                        <div className="collabrateus-left">
                            <h2>RateHawk is a service for booking hotels, air tickets and other travel services for professionals</h2>
                            <p>2,000,000 hotels, car rental, and other services throughout the world</p>
                        </div>
                        <form action="#">
                            <div className="collabrateus--right-form">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="field-holder">
                                            <label htmlFor="fullname">Fullname</label>
                                            <input type="text" placeholder='Fullname' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="field-holder">
                                            <label htmlFor="CompanyName">Company name</label>
                                            <input type="text" placeholder='Company Name' />
                                        </div>
                                    </div>
                                    <div className="field-holder">
                                        <label htmlFor="job">Your job</label>
                                        <select name="jobs" className='col-12'>
                                            <option value="select" selected>Select</option>
                                            <option value="job">Frontend Developer</option>
                                            <option value="job">Backend Developer</option>
                                            <option value="job">Fullstack Developer</option>
                                            <option value="job">PM</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="field-holder">
                                            <label htmlFor="businessEmail">Business email</label>
                                            <input type="text" placeholder='Business Email' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="field-holder">
                                            <label htmlFor="BusinessPhone">Business Phone</label>
                                            <input type="text" placeholder='Business Phone' />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="field-holder">
                                            <label htmlFor="message">Message</label>
                                            <textarea name="message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Collaborateus