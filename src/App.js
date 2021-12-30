import React from 'react';

import Table from './component/Table';
import convertJson from './logic/JsonConverter'

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import commonFr from "./translations/fr/common.json";
import commonEn from "./translations/en/common.json";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: commonEn,
            fr: commonFr,
        },
        lng: "fr", // if you're using a language detector, do not define the lng option
        fallbackLng: "fr",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });



function App({
    apiEndPoints
}) {

    const { t } = useTranslation();

    const columns = [
        {
            Header: t('preview'),
            accessor: 'preview',
        },
        {
            Header: t('title'),
            accessor: 'title',
        },
        {
            Header: t('date'),
            accessor: 'date',
        },
        {
            Header: t('file'),
            accessor: 'file',
        },
    ];


    // We'll start our table without any data
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [pageCount, setPageCount] = React.useState(0)
    const fetchIdRef = React.useRef(0)

    const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
        // This will get called when the table needs new data
        // You could fetch your data from literally anywhere,
        // even a server. But for this example, we'll just fake it.

        // Give this fetch an ID
        const fetchId = ++fetchIdRef.current

        // Set the loading state
        setLoading(true)

        const startRow = pageSize * pageIndex
        const endRow = startRow + pageSize

        fetch(apiEndPoints.list)
            .then(res => res.json())
            .then(
                (result) => {

                    setData(convertJson(result.slice(startRow, endRow)))
                    setPageCount(Math.ceil(result.length / pageSize))
                    setLoading(false)

                },
                // Remarque : il est important de traiter les erreurs ici
                // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
                // des exceptions provenant de réels bugs du composant.
                (error) => {
                    setData([])
                    setLoading(false)
                }
            )

    }, [])

  return (
    <div className="App">
      <Table
          columns={columns}
          data={data}
          fetchData={fetchData}
          loading={loading}
          pageCount={pageCount}
      />
    </div>
  );
}

export default App;
