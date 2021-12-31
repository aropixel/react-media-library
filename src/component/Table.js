import React from 'react';

import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, usePagination } from 'react-table'


const Table = ({
   getTableProps,
   getTableBodyProps,
   headerGroups,
   prepareRow,
   page
}) => {


    return (
        <>
        <table className="table rml-list-table" {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    </>
    );

}

export default Table;
