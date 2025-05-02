import React, {useState} from 'react';
import { Divider } from '@heroui/react';
import NavComponent from '../components/NavComponent';
import EstimateList from '../components/EstimateList';
import EstimateFileView from '../views/EstimateFileView';
import './Workspace.css';
import { WorkspaceProvider } from '../contexts/WorkspaceContext';

function Workspace() {
    const [estimatesListPanelOpen, setEstimatesListPanelOpen] = useState(true);

    return (
        <WorkspaceProvider>
            <div className='flex flex-col h-screen'>
                <NavComponent/>
                <div className='flex-1 workspace-wrapper grid grid-cols-[auto_auto_1fr]'>
                    <EstimateList/>
                    <Divider orientation='vertical'/>
                    <EstimateFileView/>
                </div>
            </div>
        </WorkspaceProvider>
    )
}

export default Workspace;