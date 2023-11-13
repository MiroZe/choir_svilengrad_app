import { createContext, useState } from "react";

export const FormationContext = createContext();


export const FormationProvider = ({children}) => {


const [formation, setFormation] = useState({});
const setFormationFunction = (formationData) => setFormation(formationData)

console.log(formation);

const contextValues = {
    setFormationFunction,
    formation
   
}


return (
    <FormationContext.Provider value={contextValues} >
        {children}
    </FormationContext.Provider>
)

}