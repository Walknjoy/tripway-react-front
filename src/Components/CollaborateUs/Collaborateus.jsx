import React, { useState } from 'react';
import './Collaborateus.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import axios from 'axios';
import { toast } from 'react-toastify';
const Collaborateus = () => {
  const initialState = {
    companyName: '',
    fullName: '',
    job: '',
    businessEmail: '',
    businessPhone: '',
    message: '',
  };

  const [collabrate, setCollabrate] = useState(initialState);

  const handleCollabrate = (e) => {
    const { name, value } = e.target;
    setCollabrate({ ...collabrate, [name]: value });
  };

  const handleCollabrateSubmit = async (e) => {
    e.preventDefault();
    try {
      const collaborateData = {
        fullName: collabrate.fullName,
        companyName: collabrate.companyName,
        job: collabrate.job,
        businessEmail: collabrate.businessEmail,
        businessPhone: collabrate.businessPhone,
        message: collabrate.message,
      };
      const res = await axios.post('/collaborate/send/offer', collaborateData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 200) {
        toast.success(res.data.success);
        setCollabrate(initialState); 
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="collaborate">
      <div className="container">
        <SectionTitle title={'Collaborate with us'} />
        <form onSubmit={handleCollabrateSubmit}>
          <div className="collabrate-wrapper">
            <div className="collabrateus-left">
              <h3>Near or far, we’ll get you there</h3>
              <p>
                Be part of our the magic of travel with the world. Collaborate
                with our platform to reach a diverse audience, showcase your
                expertise, and make lasting connections in the travel industry.
              </p>
              <button className="send-btn" type="submit">
              <span>Send</span>
                  </button>
            </div>
            <div className="collabrateus--right-form">
              <div className="row">
                <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="field-holder">
                    <input
                      type="text"
                      id="fullname"
                      name="fullName"
                      value={collabrate.fullName}
                      onChange={handleCollabrate}
                      required
                    />
                    <label htmlFor="fullname">Fullname</label>
                  </div>
                </div>
                <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="field-holder">
                    <input
                      type="text"
                      name="companyName"
                      id="companyname"
                      value={collabrate.companyName}
                      onChange={handleCollabrate}
                      required
                    />
                    <label htmlFor="companyname">Company name</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="field-holder">
                    <select
                      name="job"
                      value={collabrate.job}
                      onChange={handleCollabrate}>
                      <option value="">Select your jobs</option>
                      <option value="Frontend Developer">
                        Frontend Developer
                      </option>
                      <option value="Backend Developer">
                        Backend Developer
                      </option>
                      <option value="Pm">PM</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="field-holder">
                    <input
                      type="text"
                      id="businessemail"
                      name="businessEmail"
                      value={collabrate.businessEmail}
                      onChange={handleCollabrate}
                      required
                    />
                    <label htmlFor="businessemail">Business email</label>
                  </div>
                </div>
                <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="field-holder">
                    <input
                      type="text"
                      id="businessPhone"
                      name="businessPhone"
                      value={collabrate.businessPhone}
                      onChange={handleCollabrate}
                      required
                    />
                    <label htmlFor="businessPhone">Business Phone</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="field-holder">
                    <textarea
                      name="message"
                      id="message"
                      required
                      value={collabrate.message}
                      onChange={handleCollabrate}></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="responsive-send-btn" type="submit">
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
