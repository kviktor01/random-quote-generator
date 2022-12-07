import {
	GET_QUOTES_FOR_AUTHOR,
	GET_RANDOM_QUOTE,
    SET_QUOTES_LOADING,
} from "../constants/quoteConstants";

export const QuoteReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_RANDOM_QUOTE:
			return {
				...state,
				currentQuote: { ...action.payload },
				currentAuthor: action.payload.author,
			};
		case GET_QUOTES_FOR_AUTHOR:
			return { ...state, quotesForAuthor: action.payload };
        case SET_QUOTES_LOADING:
            return { ...state,loading: action.payload}
		default:
			return state;
	}
};

export const getCurrentQuote = (state) =>
	state ? (state.quotes ? state.quotes.currentQuote : null) : null;
export const getCurrentAuthor = (state) =>
	state ? (state.quotes ? state.quotes.currentAuthor : null) : null;
export const getQuotes = (state) =>
	state ? (state.quotes ? state.quotes.quotesForAuthor : null) : null;

export const isLoading=(state)=> state? state.quotes? state.quotes.loading:true:true;