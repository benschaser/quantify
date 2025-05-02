import React, { useState } from 'react'
import { useWorkspace } from '../contexts/WorkspaceContext';
import { Tabs, Tab, Divider, Button } from '@heroui/react';
import EstimateEditor from '../components/EstimateEditor.js';
import {ReactComponent as PhX} from '../assets/phosphor-icons/PhX.svg';


function EstimateFileView() {
    const {estimatesOpenList} = useWorkspace();
    const {activeEstimate, setActiveEstimate} = useWorkspace();

    const handleTabSelection = (key) => {
        setActiveEstimate(key);
    }

    return (
        <div className='flex flex-col items-fill w-full'>
            <Tabs onSelectionChange={handleTabSelection} selectedKey={activeEstimate} items={estimatesOpenList} classNames={{tabList: "rounded-none w-full justify-start", tab: "w-auto"}}>
                {(item) => (
                    <Tab 
                        className='' 
                        key={item.id} 
                        title={
                            <div className='flex flex-row items-center space-x-1'>
                                <span>{item.name}</span>
                                <Button isIconOnly size='sm' variant='light' className=' p-auto h-[24px]'>
                                    <PhX width='16px' height='16px'/>
                                </Button>
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