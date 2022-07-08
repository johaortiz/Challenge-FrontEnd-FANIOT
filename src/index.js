import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Index.module.css'
//import { Provider } from 'react-redux';
//import store from './store/index'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/*
     <Prsovider store={store}>
    <App />
     </Provider>,
);
*/