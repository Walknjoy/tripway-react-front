import { createContext, useState } from 'react';
export const mainContext = createContext(null);

function ContextApi({ children }) {
  const initialState = {
    openBar: false,
    click: false,
    userVisible: false,
    user: false,
    scrolled: false,
    activeIndex: false,
  };

  const [header, setHeader] = useState(initialState);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [user, setUser] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [activeTab, setActiveTab] = useState('hotels');
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
  //! function area
  const activeTabToggle = (index) => {
    setActiveTab((activeIndex) => (activeIndex === index ? false : index));
  };

  const [grid, setGrid] = useState(false);
  const min = 0;
  const max = 1500;
  const [rangeValues, setRangeValues] = useState([min, max]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const values = {
    passwordVisible,
    setConfirmPasswordVisible,
    setPasswordVisible,
    grid,
    setGrid,
    confirmPasswordVisible,

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
    options,
    setOptions,
    rangeValues,
    setRangeValues,
    min,
    max,
    header,
    setHeader,
  };
  return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
}
export default ContextApi;
