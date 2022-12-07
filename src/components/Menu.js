import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { GetRandomQuote } from "../actions/quoteActions";

export default function Menu() {
	const dispatch = useDispatch();
    const navigate=useNavigate();
	const onclick2 = () => {
		dispatch(GetRandomQuote());
        navigate("/")
	};
	return (
		<div
			style={{
				textAlign: "right",
				marginBottom: "100px",
				padding: "10px 20px",
			}}
		>
			<span className="random" onClick={onclick2}>Random <i style={{marginLeft:"5px"}} className="fa-solid fa-arrows-rotate"></i></span>
		</div>
	);
}
