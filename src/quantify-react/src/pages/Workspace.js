import React from 'react';
import NavComponent from '../components/NavComponent';
import EstimateList from '../components/EstimateList';
import './Workspace.css';
import { WorkspaceProvider } from '../contexts/WorkspaceContext';

function Workspace(props) {

    return (
        <WorkspaceProvider>
            <NavComponent/>
            <div className='workspace-wrapper'>
                <EstimateList/>
                
            </div>
        </WorkspaceProvider>
    )
}

export default Workspace;