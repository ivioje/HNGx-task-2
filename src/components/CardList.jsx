import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { img_300, unavailable } from "../App";
import imdbLogo from "../assets/imdb.png";
import { tvGenres, movieGenres } from "../constants/genre";
import { Link } from "react-router-dom";
import { AppContext } from "../context/GlobalContext";

const CardList = ({
	id,
	name,
	title,
	poster,
	release_date,
	origin_country,
	media_type,
	vote_average,
	genre_ids,
	getGenreNames,
}) => {
	// const movieYear = new Date(release_date).getFullYear();

	const { favorites, addToFavorites, removeFromFavorites } =
		useContext(AppContext);

	const isFavorite = favorites.some((fav) => fav.id === movie.id);

	const handleAddToFavorites = () => {
		if (isFavorite) {
			// If the movie is already in favorites, remove it
			removeFromFavorites(movie.id);
		} else {
			// If the movie is not in favorites, add it
			addToFavorites(movie);
		}
	};

	return (
		<>
			<div
				data-testid="movie-card"
				className="text-gray-900 font-dmSans"
			>
				<div className="relative flex flex-col items-center w-full">
					<Link
						to={`/movie/${id}`}
						className="cursor-pointer"
					>
						<div className="hover:opacity-90 hover:transition-all">
							<img
								src={poster ? `${img_300}/${poster}` : unavailable}
								alt={name ? name : title}
								data-testid="movie-poster"
							/>
						</div>
					</Link>
					<div className="flex items-center justify-between absolute top-[4px] w-[inherit]">
						{media_type ? (
							<span className="py-1 px-2 m-1 text-gray-900 rounded-lg bg-white/50 backdrop-blur-sm text-[12px] uppercase font-bold">
								{media_type}
							</span>
						) : null}
						<span
							onClick={handleAddToFavorites}
							className="absolute top-0 right-0 p-2 m-1 text-gray-300 rounded-full bg-white/30 backdrop-blur-sm"
						>
							{isFavorite ? "Added" : <FaHeart />}
						</span>
					</div>
				</div>

				<div>
					<div className="flex items-center">
						<span className="text-gray-400">
							{origin_country ? origin_country : null}
						</span>
						<span
							data-testid="movie-release-date"
							className="text-gray-400 "
						>
							{release_date ? release_date : ""}
						</span>
					</div>
					<h3
						data-testid="movie-title"
						className="font-bold text-[18px]"
					>
						{name ? name : title}
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
								{Math.round(vote_average * 10) / 10}/10
							</span>
						</div>
						<span>🍅 95%</span>
					</div>
					<small className="text-[12px] text-gray-400 font-bold">
						{getGenreNames(
							genre_ids,
							media_type === "tv" ? tvGenres : movieGenres
						)}
					</small>
				</div>
			</div>
		</>
	);
};

export default CardList;
