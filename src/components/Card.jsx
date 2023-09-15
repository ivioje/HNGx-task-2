import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../context/GlobalContext";
import Loader from "./Loader";
import { FaChevronRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { img_300, unavailable } from "../App";
import imdbLogo from "../assets/imdb.png";
import { tvGenres, movieGenres } from "../constants/genre";

const Card = () => {
	//import functions and states from the app context
	const { data, favorites, addToFavorites, removeFromFavorites, error } =
		useContext(AppContext);

	//function to get the movie genres
	const getGenreNames = (genreIds, genresData) => {
		return genreIds
			.map((genreId) => genresData.find((item) => item.id === genreId))
			.filter((genre) => genre)
			.map((genre) => genre.name)
			.join(", ");
	};

	//function to add a movie to favorites
	const handleAddToFavorites = (movieId) => {
		if (!favorites.some((fav) => fav.id === movieId)) {
			const movieToAdd = data.find((movie) => movie.id === movieId);
			if (movieToAdd) {
				addToFavorites(movieToAdd);
			}
		} else {
			removeFromFavorites(movieId);
		}
	};

	return (
		<div className="sm:p-[3rem] p-[4px]">
			{/*header */}
			<div className="flex items-center justify-between p-[4px] my-2 sm:p-8">
				<h1 className="xs:text-[36px] text-[22px] font-bold">
					Featured Movies
				</h1>
				<button className="flex items-center text-rose">
					See more
					<span className="pl-2">
						<FaChevronRight />
					</span>
				</button>
			</div>

			{error ? (
				<div className="mt-20 text-lg font-bold">Error: {error.message}</div>
			) : (
				//movie card
				<div
					className="card"
					data-testid="movie-card"
				>
					{data ? (
						data.slice(0, 10).map((items) => (
							<div
								key={items.id}
								className="ex:w-[25%] md:w-[33.3%] sm:w-[50%] w-auto lg:p-1 p-4 min-w-[250px]"
							>
								<div className="text-gray-900 font-dmSans">
									<div className="relative flex flex-col items-center w-full">
										<Link
											to={`/movie/${items.id}`}
											className="cursor-pointer"
										>
											{/*movie poster */}
											<div className="hover:opacity-90 hover:transition-all">
												<img
													src={
														items.poster_path
															? `${img_300}/${items.poster_path}`
															: unavailable
													}
													alt={items.name ? items.name : items.title}
													data-testid="movie-poster"
												/>
											</div>
										</Link>

										{/*media type */}
										<div className="flex items-center justify-between absolute top-[4px] w-[inherit]">
											{items.media_type ? (
												<span className="py-1 px-2 m-1 text-gray-900 rounded-lg bg-white/50 backdrop-blur-sm text-[12px] uppercase font-bold">
													{items.media_type}
												</span>
											) : null}

											{/*add to favourites button */}
											<span
												onClick={() => handleAddToFavorites(items.id)}
												className="absolute top-0 right-0 p-2 m-1 text-gray-300 rounded-full bg-white/30 backdrop-blur-sm"
											>
												{favorites.some((fav) => fav.id === items.id) ? (
													"Added"
												) : (
													<FaHeart />
												)}
											</span>
										</div>
									</div>

									<div>
										<div className="flex items-center">
											<span className="text-gray-400">
												{items.origin_country ? items.origin_country : null}
											</span>
											<span
												data-testid="movie-release-date"
												className="text-gray-400 "
											>
												{items.release_date ? items.release_date : ""}
											</span>
										</div>
										<h3
											data-testid="movie-title"
											className="font-bold text-[18px]"
										>
											{items.name ? items.name : items.title}
										</h3>

										<div className="flex items-center justify-between text-[12px]">
											<div className="flex items-center">
												<div>
													<img
														src={imdbLogo}
														alt="imdb"
														className="w-[35px] h-[17px]"
													/>
												</div>
												<span className="px-2">
													{Math.round(items.vote_average * 10) / 10}/10
												</span>
											</div>
											<span>🍅 95%</span>
										</div>
										<small className="text-[12px] text-gray-400 font-bold">
											{getGenreNames(
												items.genre_ids,
												items.media_type === "tv" ? tvGenres : movieGenres
											)}
										</small>
									</div>
								</div>
							</div>
						))
					) : (
						// loader to show if the movie details has not been fetched
						<Loader />
					)}
				</div>
			)}
		</div>
	);
};

export default Card;
