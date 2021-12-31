import React from 'react';

import filesize from 'filesize';

const Properties = ({size, extension}) => {

    return (
        <ul className="rml-list-properties">
            <li><span className={"rml-list-properties-size"}>Taille:</span> { filesize(size, {round: 0}) }</li>
            <li><span className={"rml-list-properties-type"}>Format:</span> .{ extension }</li>
        </ul>
    )

}

export default Properties;


