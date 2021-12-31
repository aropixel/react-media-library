import React from 'react';

const Filter = ({globalFilter, setGlobalFilter}) => {

    return (
        <div className={"rml-list-filter"}>
            <label data-dashlane-label="true">
                <span>Filtrer:</span>
                <input
                    placeholder={'Tapez pour filtrer...'}
                    type="text"
                    value={globalFilter || ""}
                    onChange={e => setGlobalFilter(e.target.value)}
                />
            </label>
        </div>
    )

}

export default Filter;
