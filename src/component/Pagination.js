import React from 'react';

const Pagination = ({
    currentPage,
    totalPage,
    previousPage,
    canPreviousPage,
    nextPage,
    canNextPage,
    gotoPage
}) => {

    var pages = [];
    for (var i = 0; i < totalPage; i++) {
        pages.push(i);
    }

    var buttons = [];
    pages.map(value => {
        buttons.push(<li key={value} className={"paginate_button page-item" + (currentPage==(value+1) ? ' active' : '')}><a onClick={() => gotoPage(value)} className={"page-link"}>{value+1}</a></li>)
    })

    return (
        <ul className="rm-list-pagination">
            <li className={"paginate_button page-item previous"} disabled={!canPreviousPage}>
                <a onClick={() => previousPage()}  className={"page-link"}>←</a>
            </li>
            {buttons}
            <li className="paginate_button page-item next" disabled={!canNextPage}>
                <a onClick={() => nextPage()} className={"page-link"}>→</a>
            </li>
        </ul>
    )

}

export default Pagination;
