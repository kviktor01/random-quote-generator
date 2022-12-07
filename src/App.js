import logo from "./logo.svg";
import "./App.css";
import Quote from "./components/Quote";
import Author from "./components/Author";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuotePage from "./pages/QuotePage";
import Menu from "./components/Menu";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetRandomQuote } from "./actions/quoteActions";
import QuotesPage from "./pages/QuotesPage";

function App() {
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(GetRandomQuote());
  }, [])
  
	return (
		<div className="App">
			<BrowserRouter>
      <div style={{minHeight:"100vh"}}>
        <Menu></Menu>
				<Routes>
          
					<Route
						path="/"
						exact
						element={<QuotePage></QuotePage>}
					></Route>
          <Route
						path="/quotes"
						exact
						element={<QuotesPage></QuotesPage>}
					></Route>
				</Routes>
        </div>
        <footer>created by <a href="https://devchallenges.io/portfolio/kviktor01">kviktor01 </a> -devchallenges.io</footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
