import React from "react";
import  ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from './componens/app';
import ErrorBoundry from './componens/error-boundry';
import BookstoreService from './services/bookstore-service'

import { BookstoreServiceProvider } from "./componens/bookstore-service-context";
import store from "./store";

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store = {store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value = {bookstoreService}>
                <Router>
                    <App/>
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>
)
