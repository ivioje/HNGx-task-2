import React from "react";
import CardList from "./CardList";

const Card = ({ data }) => {
	return (
		<>
			<div className="flex flex-wrap md:items-start items-center justify-center w-full xs:p-[3rem] p-[2px]">
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
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default Card;
