import React, { useState } from "react";

import logo from "../assets/Logo.svg";
import { Search } from "./Search";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div className=" items-center justify-between py-5 sm:flex hidden">
				<div>
					<img
						src={logo}
						alt="logo"
					/>
				</div>
				<div className=" w-[40%] relative ">
					<Search />
				</div>

				<div className="flex items-center justify-between w-[120px]">
					<h5>Sign in</h5>

					<div className="w-auto px-[7px] py-[10px] rounded-full bg-rose">
						<div className="w-4 h-[2px] m-1 bg-white" />
						<div className="w-4 h-[2px] m-1 bg-white" />
					</div>
				</div>
			</div>

			<div className="flex items-center justify-between py-5 sm:hidden">
				<div className="w-[130px] h-auto">
					<img
						src={logo}
						alt="logo"
					/>
				</div>
				{open && (
					<div className=" w-[90%] absolute top-[100px] shadow-2xl right-0 bg-white/30 backdrop-blur-sm p-3">
						<Search />
					</div>
				)}

				<div className="flex items-center justify-between w-[100px]">
					<h5>Sign in</h5>

					<div
						onClick={() => setOpen(!open)}
						className="w-auto sm:px-[7px] px-[5px] sm:py-[10px] py-[8px] rounded-full bg-rose"
					>
						<div className="w-4 h-[2px] m-1 bg-white" />
						<div className="w-4 h-[2px] m-1 bg-white" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
