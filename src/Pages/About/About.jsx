import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import BlogImg from '../../Media/image/blue-yellow.png';
import VacationFutures from './VacationFutures/VacationFutures';
import TeamMembers from './TeamMembers/TeamMembers';
import OurExperience from './OurExperience/OurExperience';
import LoadingTopBar from '../../Assets/LoadingTopBar/LoadingTopBar';
import CustomHelmet from '../../Assets/Helmet/CustomHelmet';

const About = () => {
  return (
    <>
      <LoadingTopBar />
      <CustomHelmet
        title="About"
        description="about ,haqqimizda"
      />
      <PageTitle title={'About us'} backgroundImg={BlogImg} />
      <OurExperience />
      <VacationFutures />
      <TeamMembers />
    </>
  );
};

export default About;
