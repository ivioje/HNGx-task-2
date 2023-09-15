import React, { useContext } from "react";
import { AppContext } from "../context/GlobalContext";
import { img_300 } from "../App";

const Favourites = () => {
	const { favorites, removeFromFavorites } = useContext(AppContext);

	return (
		<>
			<h1 className="text-center text-[40px] text-gray-700 font-bold my-10">
				Favorites List
			</h1>
			<div className="flex items-center justify-center flex-wrap m-3">
				{favorites.length ? (
					favorites.map((movie) => (
						<div
							key={movie.id}
							className="p-3"
						>
							<div className="hover:opacity-90 hover:transition-all">
								<img
									src={
										movie.poster_path
											? `${img_300}/${movie.poster_path}`
											: unavailable
									}
									alt={movie.name ? movie.name : movie.title}
									data-testid="movie-poster"
								/>
							</div>
							<h3
								data-testid="movie-title"
								className="font-bold text-[18px]"
							>
								{movie.name ? movie.name : movie.title}
							</h3>
							<button
								onClick={() => removeFromFavorites(movie.id)}
								className="bg-black text-gray-200 p-2 my-3"
							>
								Remove
							</button>
						</div>
					))
				) : (
					<div className="text-[40px] flex items-center justify-center h-[100vh] text-gray-600 font-medium">
						You do not have any favorites
					</div>
				)}
			</div>
		</>
	);
};

export default Favourites;
