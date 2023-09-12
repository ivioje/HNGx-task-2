import React from "react";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
	return (
		<div className="w-[40%] relative">
			<input
				type="search"
				placeholder="What do you want to watch?"
				className="search w-full bg-transparent px-[10px] py-[6px] relative rounded-[6px] border-2 border-solid border-gray-300"
			/>
			<div className="absolute top-[12px] right-0 px-3">
				<FaSearch />
			</div>
		</div>
	);
};
