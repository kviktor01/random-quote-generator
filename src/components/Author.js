import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getQuotesForAuthor } from "../actions/quoteActions";
import { getCurrentAuthor, getCurrentQuote } from "../reducers/QuoteReducer";

export default function Author() {
	const quote = useSelector(getCurrentQuote);
    const dispatch=useDispatch()
    const author=useSelector(getCurrentAuthor);
    const navigate=useNavigate();
const onClick=()=>{ 
    dispatch(getQuotesForAuthor(author));
    navigate("/quotes")
}

	return (
		<div onClick={onClick} className="author-container">
			<div className="author">

				{quote ? (
					<>
						<span>{quote.author}</span>
						<span
							style={{ color: "#828282", fontSize: "16px", marginTop: "5px" }}
						>
							{quote.tags[0]}
						</span>
					</>
				) : (
					""
				)}
			</div>
			<div style={{ color:"white"}}><i className="fa-solid fa-arrow-right"></i></div>
		</div>
	);
}
