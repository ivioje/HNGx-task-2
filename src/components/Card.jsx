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
	const { data, favorites, addToFavorites, removeFromFavorites, error } =
		useContext(AppContext);

	const getGenreNames = (genreIds, genresData) => {
		return genreIds
			.map((genreId) => genresData.find((item) => item.id === genreId))
			.filter((genre) => genre)
			.map((genre) => genre.name)
			.join(", ");
	};

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
		<div className="xs:p-[3rem] p-[2px]">
			<div className="flex items-center justify-between p-4 my-2 xs:p-8">
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
				<div className="card">
					{data ? (
						data.slice(0, 10).map((items) => (
							<div
								key={items.id}
								data-testid="movie-card"
								className="ex:w-[25%] md:w-[33.3%] sm:w-[50%] w-auto lg:p-1 p-4 min-w-[250px]"
							>
								<div className="text-gray-900 font-dmSans">
									<div className="relative flex flex-col items-center w-full">
										<Link
											to={`/movie/${items.id}`}
											className="cursor-pointer"
										>
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
										<div className="flex items-center justify-between absolute top-[4px] w-[inherit]">
											{items.media_type ? (
												<span className="py-1 px-2 m-1 text-gray-900 rounded-lg bg-white/50 backdrop-blur-sm text-[12px] uppercase font-bold">
													{items.media_type}
												</span>
											) : null}
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
						<Loader />
					)}
				</div>
			)}
		</div>
	);
};

export default Card;
