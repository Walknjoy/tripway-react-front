import React from 'react';
import './HeroSearch.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import SearchingInput from './SearchingInput/SearchingInput';
const HeroSearch = () => {
  return (
    <div className="hero_search">
      <SectionTitle title={'Find your next stay'} />
      <SearchingInput />
    </div>
  );
};

export default HeroSearch;
