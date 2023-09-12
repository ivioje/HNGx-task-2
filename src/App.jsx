import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";
import Favourites from "./pages/Favourites";

const App = () => {
	const [data, setData] = useState([]);

	const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
	const BASE_URL = "https://api.themoviedb.org/3";

	const fetchMovies = async () => {
		const movieData = await fetch(
			`${BASE_URL}/trending/all/day?api_key=${API_KEY}`
		);
		const resData = await movieData.json();
		setData(resData.results);
		console.log(resData.results);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/"
						exact
						element={<Home data={data} />}
					/>
					<Route
						path="/movie/:id"
						element={<MovieDetails />}
					/>
					<Route
						path="/favorites"
						element={<Favourites />}
					/>
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
export const unavailable =
	"https://www.movienewz.com/img/films/poster-holder.jpg";

export default App;
