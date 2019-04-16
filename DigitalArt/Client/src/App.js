import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './store/rootReducer';

import Header from "./components/Header/HeaderContainer";
import Footer from "./components/Footer/Footer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faDiceD6 } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faDiceD6);

const App = ({ children }) => (
     <Provider store={store}>
        <Header />
         {children}
        <Footer />
     </Provider>
);

export default App;




