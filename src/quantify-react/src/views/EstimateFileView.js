import React, {  } from 'react'
import { useWorkspace } from '../contexts/WorkspaceContext';
import { Tabs, Tab } from '@heroui/react';
import EstimateEditor from '../components/EstimateEditor.js';
import {ReactComponent as PhX} from '../assets/phosphor-icons/PhX.svg';


function EstimateFileView() {
    const {estimatesOpenList} = useWorkspace();
    const {activeEstimate} = useWorkspace();
    const {setActiveEstimate} = useWorkspace();
    const {closeEstimate} = useWorkspace();

    const handleTabSelection = (key) => {
        setActiveEstimate(key);
    }
    const handleCloseTab = (id) => {
        closeEstimate(id);
    }

    return (
        <div className='flex flex-col items-fill w-full'>
            <Tabs onSelectionChange={handleTabSelection} 
                selectedKey={activeEstimate} 
                items={estimatesOpenList} 
                classNames={{tabList: "rounded-none w-full justify-start border-b", tab: "w-auto group", panel: "p-[0px] overflow-auto"}}>
                {(item) => (
                    <Tab 
                        key={item.id} 
                        title={
                            <div className='flex flex-row items-center space-x-1'>
                                <span>{item.name}</span>
                                <span
                                    onMouseDown={(e) => {
                                        handleCloseTab(item.id)}
                                    } 
                                    className='flex items-center justify-center h-[24px] w-[24px] !-mr-[8px] rounded-sm transition-colors duration-200 ease-in-out group-data-[active=false]:display-none hover:bg-red-100 hover:text-danger'>
                                    <PhX width='16px' height='16px'/>
                                </span>
                                
                            </div>
                        }>
                        <EstimateEditor estimate={item}/>
                    </Tab>
                )}
            </Tabs>
        </div>
    )
}

export default EstimateFileView;