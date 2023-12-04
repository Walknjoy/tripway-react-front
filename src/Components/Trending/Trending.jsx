import React, { useState } from 'react';
import './Trending.scss';
import TrendingFilter from './TrendingFilter/TrendingFilter';
import TrendingCard from './TrendingCard/TrendingCard';
import useFetch from '../../hooks/useFetch';
import SectionTitle from '../SectionTitle/SectionTitle';
const Trending = () => {
  const [endPoint, setEndPoint] = useState('hotels');
  const { data, loading } = useFetch(`/${endPoint}`);
  const onTabChange = (tab) => {
    setEndPoint(tab);
  };
  return (
    <section id="trending_section">
      <div className="container">
        <SectionTitle title={'Trending'} />
        <TrendingFilter
          onTabChange={onTabChange}
          dataes={['hotels', 'cars', 'tours']}
        />
        <TrendingCard data={data} loading={loading} endPoint={endPoint} />
      </div>
    </section>
  );
};

export default Trending;
