import { createContext, useContext, useState } from "react";
import { Estimate } from '../models/Estimate.ts';

const WorkspaceContext = createContext();

export function WorkspaceProvider({children}) {
    // Estimate Data
    const [estimatesList, setEstimatesList] = useState([]);
    const [estimatesOpenList, setEstimatesOpenList] = useState([]);
    const [activeEstimate, setActiveEstimate] = useState(null);

    // Context Functions
    const addEstimate = () => {
        const newEstimate = new Estimate()
        setEstimatesList((prev) => [...prev, newEstimate]);
        openEstimate(newEstimate);
    };
    const openEstimate = (id) => {
        const estimate = estimatesList.find(est => est.id === id);
        setEstimatesOpenList((prev) => {
            const alreadyOpen = prev.some((e) => e.id === id);
            if (alreadyOpen || !estimate) return prev;
            return [...prev, estimate];
        });
        if (!estimate) return;
        setActiveEstimate(id);
    };
    const closeEstimate = (estimate) => {
        setEstimatesOpenList((prev) => prev.filter((e) => e.id !== estimate.id));
        if (activeEstimate.id === estimate.id) {
            setActiveEstimate(estimatesOpenList.at(-1) || null);
        }
    };
    const enterEstimateStatus = (id, status) => {
        setEstimatesList(prev =>
            prev.map(e => e.id === id ? e.withStatus(status) : e)
        );
    }

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
        enterEstimateStatus,
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