import React from 'react';

import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, usePagination } from 'react-table'
import Table from './Table';
import Filter from './Filter';
import PageSize from './PageSize';
import Pagination from './Pagination';
import Showing from './Showing';


const ControlledTable = ({
   columns,
   data,
   fetchData,
   loading,
   pageCount: controlledPageCount
}) => {


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        setGlobalFilter,
        state: { pageIndex, pageSize, globalFilter }
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 }, // Pass our hoisted table state
            manualPagination: true, // Tell the usePagination
            pageCount: controlledPageCount,
        },
        useGlobalFilter,
        usePagination
    )

    // Listen for changes in pagination and use the state to fetch our new data
    React.useEffect(() => {
        fetchData({ pageIndex, pageSize })
    }, [fetchData, pageIndex, pageSize])

    const currentPage = page.length
    const totalPage = controlledPageCount * pageSize

    return (
        <>
        <div className={'rml-list-header'}>
            <Filter
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <PageSize pageSize={pageSize} setPageSize={setPageSize} />
        </div>
        <Table
            getTableProps={getTableProps}
            getTableBodyProps={getTableBodyProps}
            headerGroups={headerGroups}
            prepareRow={prepareRow}
            page={page}
        />
        <div className={'rml-list-footer'}>
            <Showing loading={loading} currentPage={currentPage} totalPage={totalPage} />
            <Pagination
                currentPage={pageIndex + 1}
                totalPage={pageOptions.length}
                previousPage={previousPage}
                canPreviousPage={canPreviousPage}
                nextPage={nextPage}
                canNextPage={canNextPage}
                gotoPage={gotoPage}
            />
        </div>
    </>
    );

}

export default ControlledTable;
