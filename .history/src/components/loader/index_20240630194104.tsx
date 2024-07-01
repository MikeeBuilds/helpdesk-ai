import React from "react";
import { Spinner } from './spinner';

type LoaderProps = {
    loading: boolean;
    children: React.ReactNode;
}

export const Loader = ({ loading, children})