import React from 'react'
import './VacationFutures.scss'
import airlineTickets from '../../../Media/b-icon-01.png'
import curies from '../../../Media/b-icon-02.png'
import transport from '../../../Media/b-icon-03.png'
import itineraries from '../../../Media/b-icon-04.png'
import insurance from '../../../Media/b-icon-05.png'
import guide from '../../../Media/b-icon-06.png'
const VacationFutures = () => {
    return (
        <section id='vacation-futures'>
            <div className="container">
                <div className="perfect--vacation_title">
                    <h6>Let us help you plan your next adventure</h6>
                    <h1>
                        Perfect
                        Vacation
                        come True
                    </h1>
                </div>
                <div className="perfect-futures">
                    <div className="row">
                        <div className="col-12 col-lg-4 col-md-6">
                            <div className="perfect--vacation-futures">
                                <div className="futures-img">
                                    <img src={airlineTickets} alt="airline tickets" />
                                </div>
                                <div className="futures-title">
                                    <h4>Airline Tickets</h4>
                                </div>
                                <div className="futures-description">
                                    <p>Our travel agency specializes in providing our customers with the best deals on airline tickets. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6">
                            <div className='perfect--vacation-futures'>
                                <div className="futures-img">
                                    <img src={curies} alt="airline tickets" />
                                </div>
                                <div className="futures-title">
                                    <h4>Ocean Cruises</h4>
                                </div>
                                <div className="futures-description">
                                    <p>Luxurious and comfortable way of travel, and passengers can enjoy stunning views of the sea.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6">
                            <div className="perfect--vacation-futures">
                                <div className="futures-img">
                                    <img src={transport} alt="transport" />
                                </div>
                                <div className="futures-title">
                                    <h4>Means of Transport</h4>
                                </div>
                                <div className="futures-description">
                                    <p>Our travel agency offers a variety of means of transport to get you around your destination safely.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6">
                            <div className="perfect--vacation-futures">
                                <div className="futures-img">
                                    <img src={itineraries} alt="itineraries" />
                                </div>
                                <div className="futures-title">
                                    <h4>Travel itineraries</h4>
                                </div>
                                <div className="futures-description">
                                    <p>Our team of experts will take care of all the planning and logistics, providing you with a detailed itinerary.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6">
                            <div className="perfect--vacation-futures">
                                <div className="futures-img">
                                    <img src={insurance} alt="insurance" />
                                </div>
                                <div className="futures-title">
                                    <h4>Travel Insurance</h4>
                                </div>
                                <div className="futures-description">
                                    <p>Travel insurance is an essential part of any trip, providing peace of mind and protection.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6">
                            <div className="perfect--vacation-futures">
                                <div className="futures-img">
                                    <img src={guide} alt="guide" />
                                </div>
                                <div className="futures-title">
                                    <h4>Local Guide</h4>
                                </div>
                                <div className="futures-description">
                                    <p>We can connect you with guides who will take you off the best path and show you their city.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VacationFutures