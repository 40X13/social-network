import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from "./App";
import store from "./Redux/store";


//биндить контекст надо для метододов, которые мы прокинули как колбэки
//рефакторинг мэйн компоненты


export const rerenderEntireThree = (store) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <App store={store}  />
    );

}

rerenderEntireThree(store);

store.subscribe(rerenderEntireThree);
