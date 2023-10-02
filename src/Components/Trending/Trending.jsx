import React, { useState } from 'react';
import './Trending.scss';
import TrendingFilter from './TrendingFilter/TrendingFilter';
import TrendingCard from './TrendingCard/TrendingCard';
import useFetch from '../../hooks/useFetch';
import SectionTitle from '../SectionTitle/SectionTitle';
const Trending = () => {
  const [endPoint, setEndPoint] = useState('Entertainment');
  // const { data, loading } = useFetch(`/${endPoint}`);
  const onTabChange = (tab) => {
    switch (tab) {
      case 'entertainment':
        setEndPoint(tab);
        break;
      case 'hotel':
        setEndPoint(tab);
        break;
      case 'yachts':
        setEndPoint(tab);
        break;
      case 'car':
        setEndPoint(tab);
        break;
      case 'tour':
        setEndPoint(tab);
        break;
      default:
        setEndPoint('entertainment');
    }
  };
  return (
    <section id="trending_section">
      <div className="container">
        <SectionTitle  title={'Trending'}/>
        <TrendingFilter
          onTabChange={onTabChange}
          dataes={['Entertainment', 'Hotel', 'Yachts', 'Car', 'Tour']}
        />
        <TrendingCard />
      </div>
    </section>
  );
};

export default Trending;
