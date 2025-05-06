import React, {useState} from 'react';
import { Divider } from '@heroui/react';
import NavComponent from '../components/NavComponent';
import EstimateList from '../components/EstimateList';
import EstimateFileView from '../views/EstimateFileView';
import { WorkspaceProvider } from '../contexts/WorkspaceContext';

function Workspace() {
    return (
        <WorkspaceProvider>
            <div className='flex flex-col h-screen'>
                <NavComponent/>
                <div className='h-screen grid grid-cols-[auto_auto_1fr] overflow-hidden'>
                    <EstimateList/>
                    <Divider orientation='vertical'/>
                    <EstimateFileView/>
                </div>
            </div>
        </WorkspaceProvider>
    )
}

export default Workspace;