import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { originalWidth } from "../App";
import { unavailable } from "../App";
import { Sidebar } from "./Sidebar";
import { FaDotCircle } from "react-icons/fa";
import { AppContext } from "../context/GlobalContext";

const MovieDetails = () => {
	const [movieDetails, setMovieDetails] = useState(null);
	const { data } = useContext(AppContext);

	const { id } = useParams();

	const movieId = data.find((movie) => movie.id === parseInt(id));

	const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
	const BASE_URL = "https://api.themoviedb.org/3";

	const fetchMovieDetails = async () => {
		try {
			const movieDetails = await fetch(
				`${BASE_URL}/movie/${movieId.id}?api_key=${API_KEY}`
			);
			const resData = await movieDetails.json();

			// Convert the release_date to a UTC string
			resData.release_date_utc = new Date(
				Date.UTC(
					resData.release_date.slice(0, 4),
					parseInt(resData.release_date.slice(5, 7)) - 1,
					resData.release_date.slice(8)
				)
			).toUTCString();

			setMovieDetails(resData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (movieId) {
			fetchMovieDetails();
		}
	}, [id, movieId, BASE_URL, API_KEY]);

	return (
		<div className="flex items-start">
			<div className="w-[226px]">
				<Sidebar />
			</div>

			<div className="w-[90%] mx-4 mt-8 text-gray-800">
				{movieDetails ? (
					<div
						key={movieDetails.id}
						className="flex flex-col items-center justify-center"
					>
						<div
							className="h-[449px] w-[90%] movie_container rounded-[40px]"
							style={{
								backgroundImage: `url(${originalWidth}/${
									movieDetails.poster_path || unavailable
								})`,
							}}
						/>
						<div className="py-8 px-14">
							<div className="w-full font-medium text-[23px] text-neutral-700 flex items-center">
								<h2
									className="px-2"
									data-testid="movie-title"
								>
									{movieDetails.title}
								</h2>
								<span className="text-[7px]">
									<FaDotCircle />
								</span>
								<span
									className="px-2"
									data-testid="movie-release-date"
								>
									{movieDetails.release_date_utc}
								</span>
								<span className="text-[7px]">
									<FaDotCircle />
								</span>
								<span
									className="px-2"
									data-testid="movie-runtime"
								>
									{movieDetails.runtime} minutes
								</span>
							</div>
							<p
								data-testid="movie-overview"
								className="font-normal text-[#333333] text-[20px] tracking-[0] leading-[normal] py-5 px-2"
							>
								{movieDetails.overview}
							</p>
						</div>
					</div>
				) : (
					<p>No movie found with ID {id}</p>
				)}
			</div>
		</div>
	);
};

export default MovieDetails;
