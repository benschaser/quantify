import { createContext, useContext, useState } from "react";
import Estimate from '../models/Estimate'

const WorkspaceContext = createContext();

export function WorkspaceProvider({children}) {
    // Context Data
    const [estimatesList, setEstimatesList] = useState([]);
    const [estimatesOpenList, setEstimatesOpenList] = useState([]);
    const [activeEstimate, setActiveEstimate] = useState(null);

    // Context Functions
    const addEstimate = () => {
        setEstimatesList((prev) => [...prev, new Estimate()]);
    };
    const openEstimate = (estimate) => {
        setEstimatesOpenList((prev) => {
            const alreadyOpen = prev.some((e) => e.id === estimate.id);
            if (alreadyOpen) return prev;
            return [...prev, estimate];
        });
        setActiveEstimate(estimate);
    };
    const closeEstimate = (estimate) => {
        setEstimatesOpenList((prev) => prev.filter((e) => e.id !== estimate.id));
        if (activeEstimate.id === estimate.id) {
            setActiveEstimate(estimatesOpenList.at(-1) || null);
        }
    };


    //for testing
    addEstimate();
    addEstimate();

    const value = {
        estimatesList,
        setEstimatesList,
        estimatesOpenList,
        setEstimatesOpenList,
        activeEstimate,
        setActiveEstimate,
        addEstimate,
        openEstimate,
        closeEstimate
    }

    return (
        <WorkspaceContext.Provider value={value}>
            {children}
        </WorkspaceContext.Provider>
    )
}
export function useWorkspace() {
    return useContext(WorkspaceContext);
}