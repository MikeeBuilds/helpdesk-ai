import React, { useState} from "react";

type InitialValuesProps = {
    currentStep: number,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const InitialValues: 