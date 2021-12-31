import React from 'react';

const PageSize = ({pageSize, setPageSize}) => {

    return (
        <div className={"rml-list-pagesize"}>
            <label>
                <span>Nombre par page:</span>
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 25, 50, 100].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )

}

export default PageSize;
