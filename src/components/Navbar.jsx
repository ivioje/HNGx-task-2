import React from "react";

import logo from "../assets/Logo.svg";
import { Search } from "./Search";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between py-5">
			<div>
				<img
					src={logo}
					alt="logo"
				/>
			</div>
			<Search />

			<div className="flex items-center justify-between w-[120px]">
				<h5>Sign in</h5>

				<div className="w-auto px-[7px] py-[10px] rounded-full bg-rose">
					<div className="w-4 h-[2px] m-1 bg-white" />
					<div className="w-4 h-[2px] m-1 bg-white" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
