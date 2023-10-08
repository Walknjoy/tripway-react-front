import './Hero.scss';
import SearchingInput from '../SearchArea/SearchingInput/SearchingInput';
import SearchingList from '../SearchArea/SearchingList/SearchingList';
const Hero = () => {
 
  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_title">
          <h1 title="Find your next stay">Find your next stay</h1>
          <p>
            Find awesome hotels, tours, cars and entertainments in our websites
          </p>
        </div>
        <div className='searching-area'>
          <SearchingList />
          <SearchingInput  />
        </div>
      </div>
    </section>
  );
};

export default Hero;
