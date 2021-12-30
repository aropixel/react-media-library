import React from 'react';

import filesize from 'filesize';

const Properties = ({size, extension}) => {

    return (
        <ul className="list-properties">
            <li><span className="list-properties-size">Taille:</span> { filesize(size, {round: 0}) }</li>
            <li><span className="list-properties-type">Format:</span> .{ extension }</li>
        </ul>
    )

}

export default Properties;


