import React from 'react';
import './Collaborateus.scss';
const Collaborateus = () => {
  return (
    <section id="collaborate">
      <div className="container">
        <div className="collaborate_title">
          <h3>Collaborate with us</h3>
          <div className="horizantal"></div>
        </div>
        <form>
          <div className="collabrate-wrapper">
            <div className="collabrateus-left">
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                vitae, sint facere enim cumque debitis! Eveniet rerum, velit!!.
              </h3>
              <p>
                2,000,000 hotels, car rental, and other services throughout the
                world
              </p>
            </div>
            <div className="collabrateus--right-form">
              <div className="row">
                <div className="col-12 col-lg-6 col-md-6 col-sm-6">
                  <div className="field-holder">
                    <input type="text" id="fullname" required />
                    <label htmlFor="fullname">Fullname</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-6">
                  <div className="field-holder">
                    <input
                      type="text"
                      name="companyname"
                      id="companyname"
                      required
                    />
                    <label htmlFor="companyname">Company name</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="field-holder">
                    <select name="jobs">
                      <option value="">Select your jobs</option>
                      <option value="job">Frontend Developer</option>
                      <option value="job">Backend Developer</option>
                      <option value="job">Fullstack Developer</option>
                      <option value="job">PM</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-6">
                  <div className="field-holder">
                    <input
                      type="text"
                      id="businessemail"
                      name="businessemail"
                      required
                    />
                    <label htmlFor="businessemail">Business email</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-6">
                  <div className="field-holder">
                    <input
                      type="text"
                      id="businessphone"
                      name="businessphone"
                      required
                    />
                    <label htmlFor="businessphone">Business Phone</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="field-holder">
                    <textarea name="message" id="message" required></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="send-btn" type="submit">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Collaborateus;
