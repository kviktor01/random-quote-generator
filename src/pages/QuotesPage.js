import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Quote from "../components/Quote";
import { getCurrentAuthor, getQuotes, isLoading } from "../reducers/QuoteReducer";

export default function QuotesPage() {
    const navigate=useNavigate();
   
	const quotes = useSelector(getQuotes);
    const loading=useSelector(isLoading);
    const author=useSelector(getCurrentAuthor);
    useEffect(()=>{
        if(!loading && !quotes){
            navigate("/");
        }
    },[])
	return (
		<div className="container">
            <h1>{author}</h1>
			{quotes ? quotes.map((quote) => <Quote quote={quote}></Quote>) : ""}
		</div>
	);
}
