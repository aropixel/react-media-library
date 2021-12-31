import React from "react";

const Showing = ({loading, currentPage, totalPage}) => {

    return (
        <div className={'rml-showing'}>
            {loading ? (
                // Use our custom loading state to show a loading indicator
                <span>Loading...</span>
            ) : (
                <span>
                    Showing {currentPage} of ~{totalPage}{' '}
                    results
                </span>
            )}
        </div>

    )

}

export default Showing;

