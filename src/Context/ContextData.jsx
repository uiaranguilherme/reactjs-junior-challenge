import React, { createContext, useState } from 'react';
import { getAll } from '../Services/api.Services';
export const Context = createContext();

export function ContextData({children}) {
    const [IsVisible, setIsVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [currentClient, setCurrentClient] = useState(undefined);
    const [ isEditing, setIsEditing ] = useState(false);

    async function contextDataUpdate(){
        const data = await getAll();
        setCurrentData([...data]);
        return data
    }

    const contextData ={ 
        IsEditing: ()=>{return [ isEditing, setIsEditing ]},
        Modal: ()=>{return [IsVisible, setIsVisible]},
        CurrentClient: ()=>{return [currentClient, setCurrentClient]},
        CurrentPage: ()=>{return [currentPage, setCurrentPage]},
        CurrentData: ()=>{return [currentData, setCurrentData, contextDataUpdate]},
    }

  return(
      <Context.Provider value={contextData}>
          {children}
      </Context.Provider>
  );
}
