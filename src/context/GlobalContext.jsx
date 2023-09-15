import React, { createContext, useEffect, useState } from "react";

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
	//app states
	const [data, setData] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [error, setError] = useState(null);

	const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
	const BASE_URL = "https://api.themoviedb.org/3";

	//function to fetch movies list
	const fetchMovies = async () => {
		try {
			const movieData = await fetch(
				`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
			);
			if (!movieData.ok) {
				throw new Error("Network response was not ok");
			}
			const resData = await movieData.json();
			setData(resData.results);
		} catch (error) {
			setError(error.message);
		}
	};

	const addToFavorites = (movie) => {
		// Check if the movie is already in favorites to prevent duplicates
		if (!favorites.some((fav) => fav.id === movie.id)) {
			// Add the movie to favorites using the setFavorites function
			setFavorites([...favorites, movie]);
		}
	};

	//function to remove a movie from favorites
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
				error,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
