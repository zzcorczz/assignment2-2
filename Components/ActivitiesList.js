/*
File name:
  ActivitiesList.js
Purpose:
  This file creates context and the global array, and then will
  serve as a component in the program entry.
  Having a design like this allows us to have a much cleaner design pattern.
  It is also highly customizable.
  Global array created here, updater also created here.
*/

import { createContext, useContext, useState } from "react";

const Context = createContext();
const Update = createContext();

export function useContextHook() {

  /*
    Function name:
      useContextHook()
    Purpose:
      This function helps us access the global array.
  */

  return useContext(Context);
}

export function useUpdateHook() {

  /*
    File name:
      useUpdateHook()
    Purpose:  
      This function returns a function, that helps us
      update the array.
  */

  return useContext(Update);
}

export default function ContextProvider({ children }) {

  const [array, setArray] = useState([])
  

  function addArray( data ) {
    
    const newAct = { data: data, id: Math.random()};

    setArray((currentActs) => {
      return [...currentActs, newAct]
    })

  }


  return (
    <Context.Provider value={array}>
      <Update.Provider value={addArray}>
        {children}
      </Update.Provider>
    </Context.Provider>
  );
}