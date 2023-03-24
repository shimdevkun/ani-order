import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Edit from './Edit';
import './styles/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/edit' element={<Edit />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
