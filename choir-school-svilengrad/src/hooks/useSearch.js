import { useState } from "react";

export const useSearch = (initialState) => {

    const [searchValue, setSearchValue] = useState('')





    const filterByCriteria = (item, value) => {
      return Object.keys(item).some(
        (key) =>
          key.includes("Name") &&
          item[key] &&
          item[key].toString().toLowerCase().includes(value.toLowerCase())
      );
    };
    
    const filteredSearch = () => {
      if (searchValue === "") {
        return initialState;
      } else {
        return initialState.filter((x) => filterByCriteria(x, searchValue));
      }
    }


    
 const updateSearchValue =(value) => {
   setSearchValue(value);
 }
    
    return { search: filteredSearch() , updateSearchValue,searchValue };
  };