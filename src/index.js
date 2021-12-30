import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import mockList from "./mock/list.json";

global.fetch = (() =>
        Promise.resolve({
            json: () => Promise.resolve(mockList),
        })
)


const endPoints = {
    list: 'https://api.example.com/images/list',
    upload: 'https://api.example.com/images/upload',
    remove: 'https://api.example.com/images/remove',
    update: 'https://api.example.com/images/remove',
}

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
