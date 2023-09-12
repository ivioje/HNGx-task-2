import React from "react";
import CardList from "./CardList";
import { FaChevronRight } from "react-icons/fa";

const Card = ({ data }) => {
	const getGenreNames = (genreIds, genresData) => {
		const genreNames = genreIds.map((genreId) => {
			const genre = genresData.find((item) => item.id === genreId);
			return genre ? genre.name : "";
		});
		return genreNames.join(", ");
	};

	return (
		<div className="xs:p-[3rem] p-[2px]">
			<div className="flex items-center justify-between p-6 xs:p-8">
				<h1 className="xs:text-[36px] text-[22px] font-bold">Featured Movie</h1>
				<button className="flex items-center text-rose">
					See more
					<span className="pl-2">
						<FaChevronRight />
					</span>
				</button>
			</div>

			<div className="flex flex-wrap items-center justify-center w-full md:items-start">
				{data.slice(0, 10).map((items) => (
					<div
						key={items.id}
						className="ex:w-[25%] md:w-[33.3%] sm:w-[50%] w-auto xs:p-8 p-6 min-w-[250px]"
					>
						<CardList
							name={items.original_name}
							title={items.original_title}
							poster={items.poster_path}
							release_date={items.release_date}
							media_type={items.media_type}
							id={items.id}
							origin_country={items.origin_country}
							vote_count={items.vote_count}
							vote_average={items.vote_average}
							genre_ids={items.genre_ids}
							getGenreNames={getGenreNames}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Card;
