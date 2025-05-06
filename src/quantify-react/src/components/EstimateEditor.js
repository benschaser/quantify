import React from 'react';
import { Accordion, AccordionItem, Button, Divider } from '@heroui/react';
import {ReactComponent as PhClipboardText} from '../assets/phosphor-icons/PhClipboardText.svg';
import {ReactComponent as PhArrowBendDownRight} from '../assets/phosphor-icons/PhArrowBendDownRight.svg';
import {ReactComponent as PhEquals} from '../assets/phosphor-icons/PhEquals.svg';
import {ReactComponent as PhPlusCircle} from '../assets/phosphor-icons/PhPlusCircle.svg';
import LineItems, { LineItemsHeader } from './LineItems';



function EstimateEditor({estimate}) {
    return (
        <div className='flex flex-col items-fill w-full'>
            <Accordion>
                <AccordionItem aria-label='Project Details' title={
                    <div className='flex items-center space-x-2'>
                        <PhClipboardText width='20px' height='20px'/>
                        <span>Project Details</span>
                    </div>
                }></AccordionItem>
            </Accordion>
            <Divider/>
            <LineItemsHeader/>
            <Divider/>
            <div className='flex flex-col items-fill w-full'>
                <Accordion isCompact className='px-0' selectionMode='multiple' defaultExpandedKeys={estimate.data.map(obj => obj.id)}>
                    {estimate.data.map((division) => (
                        <AccordionItem key={division.id} aria-label={division.name} classNames={{heading: "group bg-default-100 px-2"}} title={
                            // <div className='flex items-center space-x-2'>
                            //     <div className='relative overflow-hidden w-[20px] h-[20px]'>
                            //         <div className='grid grid-cols-2 transition-transform duration-200 ease-in-out group-data-[hover=true]:translate-x-[-32px] w-[200%]'>
                            //             <div className='flex items-center justify-center'>
                            //                 <PhArrowBendDownRight width='20px' height='20px'/>
                            //             </div>
                            //             <div className='flex items-center justify-center'>
                            //                 <PhEquals width='20px' height='20px'/>
                            //             </div>
                            //         </div>
                            //     </div>
                            //     <span>{division.code} {division.name}</span>
                            // </div>
                            <div className='flex items-center space-x-2'>
                                <PhEquals width='20px' height='20px'/>
                                <span>{division.code} {division.name}</span>
                            </div>
                        }>
                            <LineItems data={division.items}/>
                        </AccordionItem>
                    ))}
                </Accordion>
                <Divider/>
                <Button 
                    size='sm'
                    variant='light'
                    className='m-2 text-default-400'
                    startContent={
                        <PhPlusCircle width='20px' height='20px'/>
                    }>
                    New Division
                </Button>
            </div>
        </div>
    )
}

export default EstimateEditor;