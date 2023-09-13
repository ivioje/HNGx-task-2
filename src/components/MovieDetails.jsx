import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { useParams } from "react-router-dom";

const MovieDetails = ({ data, API_KEY, BASE_URL }) => {
	const [movieDetails, setMovieDetails] = useState(null);

	const { id } = useParams();

	const movieId = data.find((movie) => movie.id === parseInt(id));

	const fetchMovieDetails = async () => {
		try {
			const movieDetails = await fetch(
				`${BASE_URL}/movie/${movieId.id}?api_key=${API_KEY}`
			);
			const resData = await movieDetails.json();
			setMovieDetails(resData);
		} catch (error) {
			console.log(error);
		}
	};

	console.log(movieDetails);

	useEffect(() => {
		if (movieId) {
			fetchMovieDetails();
		}
	}, [id, movieId, BASE_URL, API_KEY]);
	// Find the movie object with a matching ID

	return (
		<>
			<Sidebar />

			<div>
				{movieDetails ? (
					<div key={movieDetails.id}>
						<h2 data-testid="movie-title">{movieDetails.title}</h2>
						<span data-testid="movie-release-date">
							{movieDetails.release_date}
						</span>
						<span data-testid="movie-runtime">{movieDetails.runtime}</span>
						<p data-testid="movie-overview">{movieDetails.overview}</p>
					</div>
				) : (
					<p>No movie found with ID {id}</p>
				)}
			</div>
		</>
	);
};

export default MovieDetails;
