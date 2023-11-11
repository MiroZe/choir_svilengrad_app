import {useState} from 'react';


export const useLocalStorage = (key,initialValue ) => {
    const [state,setState] = useState(()=> {
        const savedUserLocalStorageRaw = localStorage.getItem(key);
        if(savedUserLocalStorageRaw) {
            const savedUser = JSON.parse(savedUserLocalStorageRaw);
            return savedUser
        }
        return initialValue
    });

    const setLocalStorageState = (value) => {
        setState(value)

        localStorage.setItem(key,JSON.stringify(value))
    }

    return [state,setLocalStorageState ];
}