import { Table, TableHeader, TableBody, TableRow, TableColumn, TableCell, Input } from '@heroui/react';
import React from 'react';
import { v4 as uuidv4 } from "uuid";

const headings = [
    "Code",
    "Description",
    "Notes",
    "Sub",
    "Material",
    "Labor"
]

function LineItems({items}) {

    return (
        <Table isCompact removeWrapper hideHeader aria-label='Line items' classNames={{tr: "rounded-none", td: "p-0"}}>
            <TableHeader>
                {headings.map}
                <TableColumn>i</TableColumn>
            </TableHeader>
            <TableBody items={items}>
                {(items || []).map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>gnarly</TableCell>
                    </TableRow>
                ))}
                <TableRow key={uuidv4()}>
                    <TableCell>
                        <Input radius='none' variant='light'></Input>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export function LineItemsHeader() {
    return (
        <Table removeWrapper aria-label='Line item header' isCompact classNames={{tr: "!rounded-none bg-transparent", thead: "", th: "rounded-none"}}>
            <TableHeader >
                <TableColumn>Code</TableColumn>
                <TableColumn>Description</TableColumn>
                <TableColumn>Notes</TableColumn>
                <TableColumn>Sub</TableColumn>
                <TableColumn>Material</TableColumn>
                <TableColumn>Labor</TableColumn>
            </TableHeader>
            <TableBody></TableBody>
        </Table>
    )
}

export default LineItems;
