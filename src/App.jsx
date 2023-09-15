import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";
import Favourites from "./pages/Favourites";

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/"
						exact
						element={<Home />}
					/>
					<Route
						path="/movie/:id"
						element={<MovieDetails />}
					/>
					{/* <Route
						path="/favorites"
						element={<Favourites />}
					/> */}
					<Route
						path="*"
						element={<Home />}
					/>
				</Routes>
			</Router>
		</>
	);
};

export const img_300 = "https://image.tmdb.org/t/p/w300";
export const originalWidth = "https://image.tmdb.org/t/p/original";
export const unavailable =
	"https://www.movienewz.com/img/films/poster-holder.jpg";

export default App;
