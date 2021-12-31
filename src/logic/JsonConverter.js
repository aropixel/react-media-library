import React from "react";

import Actions from '../component/Actions';
import Properties from '../component/Properties';
import Thumbnail from '../component/Thumbnail';

const convertJson = (json, setIsModalOpened, setDeleteCallBack) => {

    const collection = [];
    json.map(data => {

        var openModal = () => {
            setIsModalOpened(true);
            setDeleteCallBack(() => {
                console.log(data.id);
            })
        };

        var row = {};
        row.preview = <Thumbnail path={data.file.path} />;
        row.title = data.title;
        row.date = data.date;
        row.file = <Properties size={data.file.size} extension={data.file.extension} />
        row.action = <Actions openModal={openModal} />
        collection.push(row);

    })

    return collection;
}

export default convertJson;
