import { createContext } from 'react';

const mainContext = createContext(null);

function ContextApi({ children }) {
 const values = {};
  return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
}
export default ContextApi;
