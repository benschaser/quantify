import { Listbox, ListboxItem, ListboxSection, Button, Spinner } from '@heroui/react';
import React from 'react'
import { useWorkspace } from '../contexts/WorkspaceContext';
import {ReactComponent as PhFile} from '../assets/phosphor-icons/PhFile.svg';
import {ReactComponent as PhPlusCircle} from '../assets/phosphor-icons/PhPlusCircle.svg';
import {ReactComponent as PhWarningCircle} from '../assets/phosphor-icons/PhWarningCircle.svg';
import {ReactComponent as PhCheckCircle} from '../assets/phosphor-icons/PhCheckCircle.svg';



function EstimateList() {
    const { estimatesList } = useWorkspace();
    const { addEstimate } = useWorkspace();

    console.log(estimatesList);

    const statusIconMap = {
        saved: <PhCheckCircle width='20px' height='20px' color='#17c964'/>,
        loading: <Spinner size='sm' classNames={{label: "text-foreground mt-4"}} variant="gradient"/>,
        error: <PhWarningCircle width='20px' height='20px' color='#f31260'/>
    }

    return (
        <div className='estimate-list-wrapper border-r border-divider'>
            <Listbox selectionMode='none' bottomContent={
                <Button onPress={addEstimate} color='primary' startContent={<PhPlusCircle width='20px' height='20px'/>}>New Estimate</Button>
            }>
                <ListboxSection title='Recent Estimates'>
                    {estimatesList.map((estimate) => (
                        <ListboxItem key={estimate.id} 
                            startContent={<PhFile width='20px' height='20px'/>}
                            endContent={statusIconMap[estimate.status]}
                        >{estimate.name}</ListboxItem> 
                    ))}
                </ListboxSection>
            </Listbox>
        </div>
    )
}

export default EstimateList;