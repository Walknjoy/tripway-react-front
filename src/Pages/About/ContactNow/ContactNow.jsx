import React from 'react'
import './ContactNow.scss'
import { Link } from 'react-router-dom'
const ContactNow = () => {
  return (
    <section id='contact-now'>
      <div className="container">
        <div className="for_project_contact">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6">
              <div className="contact-text ">
                <span>Contact</span>
                <h2>Do you have any project Right now?</h2>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium</p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <div className="contact-button ">
                <Link to=''>Contact Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactNow