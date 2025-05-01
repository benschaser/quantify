import { Listbox, ListboxItem, ListboxSection } from '@heroui/react';
import React from 'react'
import {ReactComponent as PhFile} from '../assets/phosphor-icons/PhFile.svg';
import { useWorkspace } from '../contexts/WorkspaceContext';

function EstimateList() {
    return (
        <Listbox selectionMode='single'>
            <ListboxSection title='Estimates'>
                <ListboxItem startContent={<PhFile width='24px' height='24px'/>}>Estimate 1</ListboxItem>
                <ListboxItem>Estimate 2</ListboxItem>
                <ListboxItem>Estimate 3</ListboxItem>
            </ListboxSection>
        </Listbox>
    )
}

export default EstimateList;