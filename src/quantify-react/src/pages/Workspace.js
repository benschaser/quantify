import React from 'react';
import NavComponent from '../components/NavComponent';
import EstimateList from '../components/EstimateList';
import './Workspace.css';
import { WorkspaceProvider } from '../contexts/WorkspaceContext';

function Workspace(props) {

    return (
        <WorkspaceProvider>
            <div className='flex flex-col h-screen'>
                <NavComponent/>
                <div className='flex-1 workspace-wrapper'>
                    <EstimateList/>
                    
                </div>
            </div>
        </WorkspaceProvider>
    )
}

export default Workspace;