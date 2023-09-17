import { createContext, useState } from 'react';

export const mainContext = createContext(null);

function ContextApi({ children }) {
  const [openBar, setOpenBar] = useState(false);
  const [click, setClick] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(-1);
  const [openMenuIndexTwo, setOpenMenuIndexTwo] = useState(-1);
  const values = {
    openBar,
    setOpenBar,
    click,
    setClick,
    openMenuIndex, setOpenMenuIndex,openMenuIndexTwo, setOpenMenuIndexTwo
  };
  return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
}
export default ContextApi;
