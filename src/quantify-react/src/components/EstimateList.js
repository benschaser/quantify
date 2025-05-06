import { Listbox, ListboxItem, ListboxSection, Button, Spinner, Divider, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';
import React, { useState } from 'react'
import { useWorkspace } from '../contexts/WorkspaceContext';
import {ReactComponent as PhFile} from '../assets/phosphor-icons/PhFile.svg';
import {ReactComponent as PhPlusCircle} from '../assets/phosphor-icons/PhPlusCircle.svg';
import {ReactComponent as PhWarningCircle} from '../assets/phosphor-icons/PhWarningCircle.svg';
import {ReactComponent as PhCheckCircle} from '../assets/phosphor-icons/PhCheckCircle.svg';
import {ReactComponent as PhDotsThree} from '../assets/phosphor-icons/PhDotsThree.svg';
import {ReactComponent as PhTrash} from '../assets/phosphor-icons/PhTrash.svg';
import {ReactComponent as PhPencilSimple} from '../assets/phosphor-icons/PhPencilSimple.svg';
import {ReactComponent as PhCopySimple} from '../assets/phosphor-icons/PhCopySimple.svg';



function EstimateList() {
    const { estimatesList } = useWorkspace();
    const { addEstimate } = useWorkspace();
    const { openEstimate } = useWorkspace();

    const statusIconMap = {
        saved: <PhCheckCircle width='20px' height='20px' color='#17c964'/>,
        loading: <Spinner size='sm' classNames={{label: "text-foreground mt-4"}} variant="gradient"/>,
        error: <PhWarningCircle width='20px' height='20px' color='#f31260'/>
    }

    const handleItemDoubleClick = (id) => {
        openEstimate(id);
    }
    const handleItemRightClick = (e)  => {
        //open associated dropdown
        e.preventDefault();
        console.log('right click')
    }

    return (
        <div className='w-[240px] max-w-[240px]'>
            <Listbox 
                aria-label="Estimates"
                isVirtualized={true} 
                virtualization={{maxListboxHeight: 300, itemHeight: 44}} 
                selectionMode='none' 
                topContent={
                    <Button 
                        onPress={addEstimate} 
                        color='primary' 
                        startContent={
                            <PhPlusCircle width='20px' height='20px'/>
                        }
                        >New Estimate
                    </Button>
                }>
                <ListboxSection title='Recent Estimates'>
                    {estimatesList.map((estimate) => (
                        <ListboxItem
                            onContextMenu={handleItemRightClick}
                            className='group'
                            onDoubleClick={() => handleItemDoubleClick(estimate.id)} 
                            key={estimate.id} 
                            startContent={
                                <div className='relative overflow-hidden w-[20px] h-[20px] mt-[6px] mb-[6px]'>
                                    <div className='grid grid-cols-2 transition-transform duration-200 ease-in-out group-data-[hover=true]:translate-x-[-20px] w-[200%]'>
                                        <div className='flex items-center justify-center'>
                                            <PhFile width='20px' height='20px'/>
                                        </div>
                                        <Dropdown>
                                            <DropdownTrigger>
                                                <Button isIconOnly size='sm' variant='light' radius='full' className='p-0 w-auto h-auto min-w-0'>
                                                    <PhDotsThree width='20px' height='20px'/>
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu aria-label='Estimate file options.'>
                                                <DropdownItem startContent={<PhPencilSimple width='20px' height='20px'/>}>Rename</DropdownItem>
                                                <DropdownItem startContent={<PhCopySimple width='20px' height='20px'/>}>Duplicate</DropdownItem>
                                                <DropdownItem color='danger' className='text-danger' startContent={<PhTrash width='20px' height='20px'/>}>Delete</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </div>
                            }
                            endContent={statusIconMap[estimate.status]}
                            >{estimate.name}
                        </ListboxItem> 
                    ))}
                </ListboxSection>
            </Listbox>
            <Divider/>
        </div>
    )
}

export default EstimateList;