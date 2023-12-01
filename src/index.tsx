import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {ThemeProvider} from '@mui/material';
import reportWebVitals from './reportWebVitals';
import {theme} from './palette';
import {Provider} from 'react-redux';
import {store} from './store/campaigns/store';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Coupon} from "./components/Coupon";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const baseName = "/km-test-marzia"

root.render(
    <React.StrictMode>

        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter basename={baseName}>
                    <Routes>
                        <Route path={"/"} Component={App}></Route>
                        <Route path={`/coupon`} Component={Coupon}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
