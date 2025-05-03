import React from 'react';
import { Accordion, AccordionItem, Divider } from '@heroui/react';

function EstimateEditor({estimate}) {
    return (
        <div className='flex flex-col items-fill w-full'>
            <Accordion className=''>
                <AccordionItem title='Project Details'></AccordionItem>
            </Accordion>
            <Divider/>
            <div className='flex items-fill w-full'>
                <Accordion isCompact className='px-0'>
                    <AccordionItem title='01' classNames={{heading: "bg-default-100 px-2"}}></AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default EstimateEditor;