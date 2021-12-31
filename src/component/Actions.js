import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


import filesize from 'filesize';

const Actions = ({openModal}) => {


    return (
        <>
            <a onClick={openModal} className={"rml-list-action"}><FontAwesomeIcon icon={faTrash} /></a>
        </>
    )

}

export default Actions;


