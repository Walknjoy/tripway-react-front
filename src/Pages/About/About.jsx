import React from 'react'
import PageTitle from '../../Components/PageTitle/PageTitle';
import BlogImg from '../../Media/blog-bg.webp';
import VacationFutures from './VacationFutures/VacationFutures';
import ContactNow from './ContactNow/ContactNow';
import TeamMembers from './TeamMembers/TeamMembers';

const About = () => {
  return (
    <div>
      <PageTitle title={'About us'} backgroundImg={BlogImg} />
      <VacationFutures/>
      <TeamMembers/>
      <ContactNow/>
    </div>
  )
}

export default About
