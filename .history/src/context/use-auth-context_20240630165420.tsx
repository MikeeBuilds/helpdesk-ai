import React, { useState} from "react";

type InitialValuesProps = {
    currentStep: number,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const InitialValues: InitialValuesProps = {
    currentStep: 1,
    setCurrentStep: () => undefined
}

const authCintext - React.create