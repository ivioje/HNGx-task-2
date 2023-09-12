import React from "react";
import { FaHeart } from "react-icons/fa";
import { img_300, unavailable } from "../App";
import imdbLogo from "../assets/imdb.png";

const CardList = ({
	id,
	name,
	title,
	poster,
	release_date,
	origin_country,
	media_type,
	vote_count,
	vote_average,
	genre_ids,
}) => {
	const movieYear = new Date(release_date).getFullYear();

	return (
		<div className="text-gray-900">
			<div className="relative flex flex-col items-center w-full">
				<div>
					<img
						src={poster ? `${img_300}/${poster}` : unavailable}
						alt={name ? name : title}
					/>
				</div>
				<div className="flex items-center justify-between absolute top-[4px] w-[218px]">
					<span className="py-1 px-2 m-1 text-gray-900 rounded-lg bg-white/50 backdrop-blur-sm text-[12px] uppercase font-bold">
						{media_type ? media_type : ""}
					</span>
					<span className="p-2 m-1 text-gray-300 rounded-full bg-white/30 backdrop-blur-sm">
						<FaHeart />
					</span>
				</div>
			</div>

			<div>
				<span className="text-gray-400">
					{origin_country ? origin_country : "" + movieYear ? movieYear : ""}
				</span>
				<h3 className="font-bold text-[18px]">{name ? name : title}</h3>

				<div className="flex items-center justify-between text-[12px]">
					<div className="flex items-center">
						<img
							src={imdbLogo}
							alt="imdb"
							className="w-[35px] h-[17px]"
						/>
						<span className="px-2">{vote_average}/10</span>
					</div>
					<span>🍅 {vote_count}</span>
				</div>
				<p>{genre_ids}</p>
			</div>
		</div>
	);
};

export default CardList;
