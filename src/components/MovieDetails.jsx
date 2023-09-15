import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { originalWidth } from "../App";
import { unavailable } from "../App";
import { Sidebar } from "./Sidebar";
import { FaDotCircle } from "react-icons/fa";
import { AppContext } from "../context/GlobalContext";
import { toast } from "react-toastify";
import Loader from "./Loader";

const MovieDetails = () => {
	const [movieDetails, setMovieDetails] = useState(null);
	const [open, setOpen] = useState(false);
	const [error, setError] = useState(null);

	const { data } = useContext(AppContext);

	const { id } = useParams();

	//match the movie id from the api with the id in the url
	const movieId = data.find((movie) => movie.id === parseInt(id));

	const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
	const BASE_URL = "https://api.themoviedb.org/3";

	//function to fetch the movie details
	const fetchMovieDetails = async () => {
		try {
			const movieDetails = await fetch(
				`${BASE_URL}/movie/${movieId.id}?api_key=${API_KEY}`
			);
			if (!movieDetails.ok) {
				toast.error("Network response was not ok");
			}
			const resData = await movieDetails.json();

			// Convert the release_date to milliseconds
			if (resData.release_date) {
				resData.release_date = Date.parse(resData.release_date);
			}

			setMovieDetails(resData);
		} catch (error) {
			setError(error.message);
		}
	};

	useEffect(() => {
		if (movieId) {
			fetchMovieDetails();
		}
	}, [id, movieId, BASE_URL, API_KEY]);

	return (
		<div className="flex items-start relative">
			{/*side bar */}
			<div className="w-[226px] hidden md:flex">
				<Sidebar />
			</div>
			{open && (
				<div className="w-[226px] absolute bg-white">
					<Sidebar />
				</div>
			)}

			{/*icon to open and close the side bar */}
			<div
				onClick={() => setOpen(!open)}
				className="w-auto md:hidden absolute z-50 sm:px-[7px] px-[5px] sm:py-[10px] py-[8px] rounded-full bg-rose sm:mx-3 mx-1 my-1"
			>
				<div className="w-4 h-[2px] m-1 bg-white" />
				<div className="w-4 h-[2px] m-1 bg-white" />
			</div>

			{/*show an error message if an error occurs while fetching the movie details, else, show the movie details*/}
			{error ? (
				<div className="text-red-700 font-bold text-xl h-[80vh] flex items-center justify-center w-full flex-col">
					<p>{"Error: " + error}</p>
					<small>Please, check your network and try again.</small>
				</div>
			) : (
				//movie details
				<div className="md:w-[90%] w-full mx-4 md:mt-8 mt-4 text-gray-800">
					{movieDetails ? (
						<div
							key={movieDetails.id}
							className="flex flex-col items-center justify-center"
						>
							{/*movie poster */}
							<div
								className="h-[449px] w-[90%] movie_container rounded-[40px] xs:ml-0 ml-2 shadow-xl"
								style={{
									backgroundImage: `url(${originalWidth}/${
										movieDetails.poster_path || unavailable
									})`,
								}}
							/>
							<div className="py-8 xs:px-14 px-3">
								<div className="w-full sm:font-medium font-bold md:text-[23px] text-[20px] text-neutral-700 flex sm:items-center items-start sm:flex-row flex-col">
									{/*movie title */}
									<h2
										className="px-2"
										data-testid="movie-title"
									>
										{movieDetails.title}
									</h2>
									<span className="text-[7px] sm:block hidden">
										<FaDotCircle />
									</span>
									{/*movie release date */}
									<span
										className="px-2"
										data-testid="movie-release-date"
									>
										{movieDetails.release_date}
									</span>
									<span className="text-[7px] sm:block hidden">
										<FaDotCircle />
									</span>
									{/*movie runtime */}
									<p
										className="px-2"
										data-testid="movie-runtime"
									>
										<span>{movieDetails.runtime}</span> minutes
									</p>
								</div>
								{/*movie overview */}
								<p
									data-testid="movie-overview"
									className="font-normal text-[#333333] md:text-[20px] text-[18px] tracking-[0] leading-[normal] py-5"
								>
									{movieDetails.overview}
								</p>
							</div>
						</div>
					) : (
						<Loader />
					)}
				</div>
			)}
		</div>
	);
};

export default MovieDetails;
