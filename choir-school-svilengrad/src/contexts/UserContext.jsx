import { createContext,useState, useContext } from "react";

const Usercontext = createContext();

export const UserProvider = ({children}) => {


const [user, setUser] = useState({});
const setUserFunction = (userData) => setUser(userData)


const contextValues = {setUserFunction, username:user.username}


return (
    
    <Usercontext.Provider value={contextValues}>
        {children}
    </Usercontext.Provider>
    
   

)

}

export const useUserContext = () => {
    return useContext(Usercontext);
  };

