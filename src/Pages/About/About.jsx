import React from 'react'
import PageTitle from '../../Components/PageTitle/PageTitle';
import BlogImg from '../../Media/image/blue-yellow.png';
import VacationFutures from './VacationFutures/VacationFutures';
import TeamMembers from './TeamMembers/TeamMembers';
import OurExperience from './OurExperience/OurExperience';

const About = () => {
  return (
    <div>
      <PageTitle title={'About us'} backgroundImg={BlogImg} />
      <OurExperience/>
      <VacationFutures/>
      <TeamMembers/>
    </div>
  )
}

export default About
