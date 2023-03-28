import React from 'react';
import ReactDOM from 'react-dom/client';

import {Provider} from "react-redux";
import store from "./redux/redux";

import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
//todo:
// don't repeat yourself
// деплой продакшн версии!
// хироку- хостинг
// скрой загруку фотки бурегром ил кнопкой
// скрой контакты в бургер или расположи правее авы
// если я ывшел со строницы профайл, то и после логинезации должен войти на профайл в локал сторадж? или при воходе сохранять в сторе
// вынеси загрузку картинки в компоненты общие
// убрать лишние контейнеры
// сделай вложенный рутинг
// сделай делегирование везде
// setportionSize меняй количество отображаемых пользователей
// try catch придумай как обработать ошибки, алерт не очень практика
//tests
//поменяй архитектру, например вынеси общие/безымянные компонен в отдельную папку
//cделай контакты впадающими при нажатии
//если зайдет другой поменяется отрисовка , проверь!
//поработай с диалогами
//делай запрос если пользователь зафоловелен добавь функционал
//при логинизации возвращается id переделай все!
//инкапсулируй айди залогиненого в редюсер,нужен он в профайл?
//flux in pagination? Ничего не должно мнняться без стэйта
//запроси зафоловеных френдов и пихни их в сайдбар
//сделай крутой прелоадер с названием компонент и типа просто тень загружается
//сделай индикатор загрузки фото
//https://learn.javascript.ru/resume-upload
//если компонента загружается реакт лази, то мне надоч тобы они все грузились в мэйне
//поиск по юзерам
//git  разбей на подчасти
//сделай классы и нследование в апи реселект
//убери дублирование кода
//добавь просомотр пользователя если не залогинен
//переменуй контейнерные и добаыт их в провайдер
//сделай аккуратную пагинацию и отображние юзеров с добавлением при промотке вниз и выбором количества отображаемых юзеров
//сделай отображение только с фото
//переделай редакс!!!!!!!
//биндить контекст надо для метододов, которые мы прокинули как колбэки
//убери папку main
//https://www.schoolsw3.com/howto/howto_css_shake_image.php
// //почему санку кидаем в диспатч
// Disable the submit button while the user has attempted to submit (hint: formik.isSubmitting)
// Add a reset button with formik.handleReset or <button type="reset">.
// Pre-populate initialValues based on URL query string or props passed to <SignupForm>.
// Change the input border color to red when a field has an error and isn’t focused
// Add a shake animation to each field when it displays an error and has been visited
// Persist form state to the browser’s sessionStorage so that form progress is kept in between page refreshes
//оптимизация lazy, memo
//быстыре клавиши
//как правильно делать редиректы
///интерфейс для залогиненого и разлогиненого пользователя
//нэйминг функций
//https://rajdee.gitbooks.io/redux-in-russian/content/docs/recipes/ComputingDerivedData.html abought selector
//сделай редирект на страницуц с котрой вышел напр нажал на месаджах выйти, кикнуло на логин, потом при входе вернись на сообщения какой-то хистори пропс
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

window.store = store;

