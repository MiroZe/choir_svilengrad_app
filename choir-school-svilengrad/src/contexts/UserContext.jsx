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
    isAuthenticated: !!user._id,
    hasAccess : (user.role === 'admin' || user.role === 'chorister'),
    isOnlyUser : user.role === 'user' 
    
    }


return (
    
    <Usercontext.Provider value={contextValues}>
        {children}
    </Usercontext.Provider>
    
   

)

}





