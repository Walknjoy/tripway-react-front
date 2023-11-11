import { createContext, useState } from 'react';
import { format } from 'date-fns';
import useFetch from '../hooks/useFetch';
export const mainContext = createContext(null);
function ContextApi({ children }) {
  const [openBar, setOpenBar] = useState(false);
  const [click, setClick] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(-1);
  const [openMenuIndexTwo, setOpenMenuIndexTwo] = useState(-1);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [user, setUser] = useState(false);
  const [userVisible, setUserVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [register, setRegister] = useState({
    username: '',
    country: '',
    email: '',
    password: '',
    city: '',
    phone: '',
  });
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });
  const [filterList, setFilteredList] = useState([]);
  //! function area
  const activeTabToggle = (index) => {
    setActiveTab(index);
  };

  const [grid, setGrid] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const initialSideBarHotel = {
    city: '',
    rooms: options.room,
    type: 'all',
    startDate: format(date[0].startDate, 'MM/dd/yyyy'),
    endDate: format(date[0].endDate, 'MM/dd/yyyy'),
    featured: true,
    guests: Number(options.children + options.adult),
  };
  const [sideBarHotel, setSideBarHotel] = useState(initialSideBarHotel);
  const values = {
    openBar,
    setOpenBar,
    click,
    setClick,
    passwordVisible,
    setConfirmPasswordVisible,
    setPasswordVisible,
    grid,
    setGrid,
    confirmPasswordVisible,
    openMenuIndex,
    setOpenMenuIndex,
    openMenuIndexTwo,
    setOpenMenuIndexTwo,
    userVisible,
    setUserVisible,
    user,
    setUser,
    register,
    setRegister,
    avatar,
    setAvatar,
    login,
    setLogin,
    activeTabToggle,
    activeTab,
    setActiveTab,
    filterList,
    setFilteredList,
    date,
    setDate,
    options,
    setOptions,
    sideBarHotel,
    setSideBarHotel,
  };
  return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
}
export default ContextApi;
