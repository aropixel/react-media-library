import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import mockList from "./mock/list.json";
import mockRemove from "./mock/list.json";
import mockUpdate from "./mock/list.json";
import mockUpload from "./mock/list.json";

const endPoints = {
    list: 'https://api.example.com/images/list',
    upload: 'https://api.example.com/images/upload',
    remove: 'https://api.example.com/images/remove',
    update: 'https://api.example.com/images/update',
};

global.fetch = ((url) => Promise.resolve({
        json: () => {
            switch (url) {

                case 'https://api.example.com/images/list':
                    return Promise.resolve(mockList);

                case 'https://api.example.com/images/remove':
                    return Promise.resolve(mockRemove);

                case 'https://api.example.com/images/update':
                    return Promise.resolve(mockUpdate);

                case 'https://api.example.com/images/upload':
                    return Promise.resolve(mockUpload);

            }
        },
    })
)

ReactDOM.render(
  <React.StrictMode>
    <App apiEndPoints={endPoints} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
