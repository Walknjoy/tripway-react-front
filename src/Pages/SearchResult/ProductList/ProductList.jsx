import React, { useContext, useEffect } from 'react';
import ListCard from '../../../Components/ListCard/ListCard';
import GridCard from '../../../Components/GridCard/GridCard';
import { mainContext } from '../../../utils/ContextApi';
import useFetch from '../../../hooks/useFetch';
import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';
const ProductList = () => {
  const { grid, filterList, setFilteredList,date,options } =
    useContext(mainContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sideBarHotelFromPrevPage = {
    city: searchParams.get('city') || '',
    rooms: searchParams.get('rooms') || options.room,
    type: searchParams.get('type') || "all",
    startDate:
      searchParams.get('startDate') || format(date[0].startDate, 'MM/dd/yyyy'),
    endDate:
      searchParams.get('endDate') || format(date[0].endDate, 'MM/dd/yyyy'),
    featured: searchParams.get('featured') === 'true',
    guests:
      Number(searchParams.get('guests')) ||
      Number(options.children + options.adult),
  };

  const { data, loading } = useFetch('/hotels');
  useEffect(() => {
    const filteredData = data.filter((hotel) =>
      hotel.city.includes(sideBarHotelFromPrevPage.city)
    );
    setFilteredList(filteredData);
  }, [data, sideBarHotelFromPrevPage.city, setFilteredList]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (grid === false) {
    return <ListCard products={filterList} />;
  }

  if (grid === true) {
    return <GridCard products={filterList} />;
  }
};

export default ProductList;
