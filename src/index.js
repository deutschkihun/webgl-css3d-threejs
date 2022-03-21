import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configureStore } from './store';
import App from './App';

const store = configureStore();
const persistor = persistStore(store)

// if you want to delete the persisting data then check localstorage 

ReactDom.render(
    <Provider store={store}>
        <PersistGate
            loading={<div>Loading</div>}
            persistor={persistor}
        >
            <App /> 
        </PersistGate>
    </Provider>
  ,document.getElementById('root')) 