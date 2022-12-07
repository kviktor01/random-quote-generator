import axios from "axios";
import { useSelector } from "react-redux";
import {
	GET_QUOTES_FOR_AUTHOR,
	GET_RANDOM_QUOTE,
    SET_QUOTES_LOADING,
} from "../constants/quoteConstants";
import { getCurrentAuthor } from "../reducers/QuoteReducer";
import store from "../store";
//import { randomQuote, authorQuotes, getQuotes, searchQuotes } from "quotegarden";

export const GetRandomQuote = () => async (dispatch) => {
	const quote = await axios.get("https://api.quotable.io/random");
	dispatch({
		type: GET_RANDOM_QUOTE,
		payload: quote.data,
	});
	console.log(quote);
};

export const getQuotesForAuthor = (author) => async (dispatch) => {
	//const author=useSelector(getCurrentAuthor);
	//const author =await store.getstate().quotes.currentAuthor;
    dispatch({
        type:SET_QUOTES_LOADING,
        payload: true,
    })
	const quotes = await axios.get(
		"https://api.quotable.io/quotes?author=" + author
	);
	console.log(...quotes.data.results);
	dispatch({ 
        type: GET_QUOTES_FOR_AUTHOR, 
        payload: quotes.data.results 
    });
    dispatch({
        type:SET_QUOTES_LOADING,
        payload: false,
    })
};
