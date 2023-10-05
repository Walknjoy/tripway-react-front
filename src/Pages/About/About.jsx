import React from 'react'
import PageTitle from '../../Components/PageTitle/PageTitle';
import BlogImg from '../../Media/blog-bg.webp';
import VacationFutures from './VacationFutures/VacationFutures';
import ContactNow from './ContactNow/ContactNow';
import TeamMembers from './TeamMembers/TeamMembers';
import OurExperience from './OurExperience/OurExperience';

const About = () => {
  return (
    <div>
      <PageTitle title={'About us'} backgroundImg={BlogImg} />
      <OurExperience/>
      <VacationFutures/>
      <TeamMembers/>
      <ContactNow/>
    </div>
  )
}

export default About
