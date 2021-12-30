import React from "react";

import Thumbnail from '../component/Thumbnail';
import Properties from '../component/Properties';

const convertJson = (json) => {

    const collection = [];

    json.map(data => {

        var row = {};
        row.preview = <Thumbnail path={data.file.path} />;
        row.title = data.title;
        row.date = data.date;
        row.file = <Properties size={data.file.size} extension={data.file.extension} />
        collection.push(row);

    })

    return collection;
}

export default convertJson;
