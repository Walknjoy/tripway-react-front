import React, { useState } from 'react';
import './Trending.scss';
import TrendingFilter from './TrendingFilter/TrendingFilter';
import TrendingCard from './TrendingCard/TrendingCard';
import useFetch from '../../hooks/useFetch';
import SectionTitle from '../SectionTitle/SectionTitle';
const Trending = () => {
  const [endPoint, setEndPoint] = useState('cars');
  const { data, loading, reFetch } = useFetch(`/${endPoint}`);
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
        <TrendingCard data={data} loading={loading} />
      </div>
    </section>
  );
};

export default Trending;
