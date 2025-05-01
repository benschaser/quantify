import { createContext, useContext, useState } from "react";
import { Estimate } from '../models/Estimate.js';

const WorkspaceContext = createContext();

export function WorkspaceProvider({children}) {
    // Context Data
    const [estimatesList, setEstimatesList] = useState([
        {
            "id": "q9238rufohgj",
            "name": "test estimate 1"
        }
    ]);
    const [estimatesOpenList, setEstimatesOpenList] = useState([]);
    const [activeEstimate, setActiveEstimate] = useState(null);

    // Context Functions
    const addEstimate = () => {
        const newEstimate = new Estimate()
        setEstimatesList((prev) => [...prev, newEstimate]);
        openEstimate(newEstimate);
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

    const value = {
        estimatesList,
        setEstimatesList,
        estimatesOpenList,
        setEstimatesOpenList,
        activeEstimate,
        setActiveEstimate,
        addEstimate,
        openEstimate,
        closeEstimate,
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