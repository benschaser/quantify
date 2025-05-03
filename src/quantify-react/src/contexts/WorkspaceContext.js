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
    const closeEstimate = (id) => {
        var index;
        console.log('\nclosing: '+id+'\nactive: ' + activeEstimate);
        // setEstimatesOpenList((prev) => {
        //     index = prev.findIndex(item => item.id === id);
        //     if (index === -1) return prev;

        //     const newItems = [...prev];
        //     newItems.splice(index, 1);
        //     return newItems;
        // });
        // if (activeEstimate === id) {
        //     const newActiveIndex = estimatesOpenList[index - 1] ?? estimatesOpenList[index] ?? null;
        //     setActiveEstimate(estimatesOpenList.at(newActiveIndex) || null);
        //     console.log('was active');
        // }
        // else {console.log('was not active')}

        // console.log('fnt end: '+activeEstimate);
        
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