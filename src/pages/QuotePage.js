import React from "react";
import { useSelector } from "react-redux";
import Author from "../components/Author";
import Quote from "../components/Quote";
import { getCurrentQuote } from "../reducers/QuoteReducer";

export default function QuotePage() {
    const quote=useSelector(getCurrentQuote);

	return (
		<div className="container">
			<Quote quote={quote}></Quote>
			<Author></Author>
		</div>
	);
}
