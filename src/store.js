import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { QuoteReducer } from "./reducers/QuoteReducer";


const initialState={
    quotes:{
        currentQuote:null,
        currentAuthor:null,
        quotesForAuthor:null,
        loading: true,
    }
};


const reducer= combineReducers({
    quotes:QuoteReducer
});

const composeEnchancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,initialState, composeEnchancer(applyMiddleware(thunk)));

export default store;