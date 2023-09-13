import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AppContext = preserveRef("c", createContext());

function preserveRef(key, v) {
	if (import.meta.env.PROD) return v;

	const old = import.meta.hot.data[key];
	const now = old || v;

	import.meta.hot.on("vite:beforeUpdate", () => {
		import.meta.hot.data[key] = now;
	});

	return now;
}

export const AppProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [favorites, setFavorites] = useState([]);

	const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
	const BASE_URL = "https://api.themoviedb.org/3";

	const fetchMovies = async () => {
		try {
			const movieData = await fetch(
				`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
			);
			const resData = await movieData.json();
			setData(resData.results);
			// console.log(resData.results);
		} catch (error) {
			console.log(error);
		}
	};

	const addToFavorites = (movie) => {
		// Check if the movie is already in favorites to prevent duplicates
		if (!favorites.some((fav) => fav.id === movie.id)) {
			// Add the movie to favorites using the setFavorites function
			setFavorites([...favorites, movie]);
		}
	};

	const removeFromFavorites = (movieId) => {
		const updatedFavorites = favorites.filter((fav) => fav.id !== movieId);
		setFavorites(updatedFavorites);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<AppContext.Provider
			value={{
				data,
				addToFavorites,
				removeFromFavorites,
				favorites,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
