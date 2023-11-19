import { createContext, useState,useMemo,useCallback } from "react";

export const FormationContext = createContext();


export const FormationProvider = ({children}) => {


const [formation, setFormation] = useState({});



const setFormationFunction = useCallback(
    (formationData) => setFormation(formationData),
    []
  );

  const contextValues = useMemo(
    () => ({
      setFormationFunction,
      formation,
      formationName:formation.formationName,
      formationId:formation._id
    }),
    [setFormationFunction, formation]
  );






return (
    <FormationContext.Provider value={contextValues} >
        {children}
    </FormationContext.Provider>
)

}