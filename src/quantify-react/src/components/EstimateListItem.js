import { Listbox, ListboxItem, ListboxSection } from '@heroui/react';
import React from 'react'
import {ReactComponent as PhFile} from '../assets/phosphor-icons/PhFile.svg';

function EstimateList({estimate}) {
    return (
        <ListboxItem startContent={<PhFile width='24px' height='24px'/>}>{estimate.name}</ListboxItem>  
    )
}

export default EstimateList;