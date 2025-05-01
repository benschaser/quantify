import { Listbox, ListboxItem, ListboxSection, Button } from '@heroui/react';
import React, { useEffect } from 'react'
import { useWorkspace } from '../contexts/WorkspaceContext';
import EstimateListItem from './EstimateListItem.js';

function EstimateList() {
    const { estimatesList } = useWorkspace();

    return (
        <div className='estimate-list-wrapper'>
            <Listbox selectionMode='single'>
                <ListboxSection title='Estimates'>
                    {estimatesList.map((estimate) => (
                        <EstimateListItem key={estimate.id} estimate={estimate}/>
                    ))}
                </ListboxSection>
            </Listbox>
            <Button>Add</Button>
        </div>
    )
}

export default EstimateList;