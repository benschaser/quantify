import { Listbox, ListboxItem, ListboxSection, Button, Spinner } from '@heroui/react';
import React from 'react'
import { useWorkspace } from '../contexts/WorkspaceContext';
import {ReactComponent as PhFile} from '../assets/phosphor-icons/PhFile.svg';
import {ReactComponent as PhPlusCircle} from '../assets/phosphor-icons/PhPlusCircle.svg';
import {ReactComponent as PhWarningCircle} from '../assets/phosphor-icons/PhWarningCircle.svg';
import {ReactComponent as PhCircleFill} from '../assets/phosphor-icons/PhCircleFill.svg';



function EstimateList() {
    const { estimatesList } = useWorkspace();
    const { addEstimate } = useWorkspace();

    console.log(estimatesList);

    const statusIconMap = {
        saved: <PhCircleFill width='16px' height='16px' color='#17c964'/>,
        loading: <Spinner size='sm' classNames={{label: "text-foreground mt-4"}} variant="gradient"/>,
        error: <PhWarningCircle width='16px' height='16px' color='#f31260'/>
    }

    return (
        <div className='estimate-list-wrapper'>
            <Listbox selectionMode='single' bottomContent={
                <Button onPress={addEstimate} color='primary' startContent={<PhPlusCircle width='24px' height='24px'/>}>New Estimate</Button>
            }>
                <ListboxSection title='Estimates'>
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