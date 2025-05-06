import { Table, TableHeader, TableBody, TableRow, TableColumn, TableCell } from '@heroui/react';
import React from 'react';
import { v4 as uuidv4 } from "uuid";


function LineItems({items}) {

    return (
        <Table removeWrapper hideHeader aria-label='Line items' classNames={{tr: "rounded-none"}}>
            <TableHeader>
                <TableColumn>i</TableColumn>
            </TableHeader>
            <TableBody items={items}>
                {(items || []).map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>gnarly</TableCell>
                    </TableRow>
                ))}
                <TableRow key={uuidv4()}>
                    <TableCell>new</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export function LineItemsHeader() {
    return (
        <Table removeWrapper aria-label='Line item header'>
            <TableHeader>
                <TableColumn>hi</TableColumn>
                <TableColumn>hi</TableColumn>
                <TableColumn>hi</TableColumn>
            </TableHeader>
            <TableBody></TableBody>
        </Table>
    )
}

export default LineItems;
