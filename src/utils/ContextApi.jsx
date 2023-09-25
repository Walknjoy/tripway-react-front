import { createContext, useState } from 'react';

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

  // register
  const [register, setRegister] = useState({
    username: '',
    country: '',
    email: '',
    password: '',
    city: '',
    phone: '',
  });

  // login
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });
  //  remember
  const [rememberMe, setRememberMe] = useState(false);
  const values = {
    openBar,
    setOpenBar,
    click,
    setClick,
    passwordVisible,
    setConfirmPasswordVisible,
    setPasswordVisible,
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
    rememberMe, setRememberMe
  };
  return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
}
export default ContextApi;
