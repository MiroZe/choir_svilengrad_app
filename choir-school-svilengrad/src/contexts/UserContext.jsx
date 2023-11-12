import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Usercontext = createContext();

export const UserProvider = ({children}) => {


const [user, setUser] = useLocalStorage('user',{});
const setUserFunction = (userData) => setUser(userData)


const contextValues = {
    setUserFunction,
     username:user.username,
    isAdmin: user.role == 'admin',
   
    }


return (
    
    <Usercontext.Provider value={contextValues}>
        {children}
    </Usercontext.Provider>
    
   

)

}





