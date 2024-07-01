import React, { useState} from "react";

type InitialValuesProps = {
    currentStep: number,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const InitialValues: InitialValuesProps = {
    currentStep: 1,
    setCurrentStep: () => undefined,
}
const authContext = React.createContext(InitialValues);


const { Provider } = authContext;


export const AuthContextProvider = () => {
const [currentStep, setCurrentStep] = useState<number>(InitialValues.currentStep);


return (
<Provider value={{ currentStep, setCurrentStep }}>
{/* children */}
</Provider>
);
}