import React from "react";
import logo from "../assets/LogoBlack.png";
import { NavLink } from "react-router-dom";
import {
	FaArrowAltCircleRight,
	FaCalendar,
	FaFilm,
	FaHome,
	FaTv,
} from "react-icons/fa";

export const Sidebar = () => {
	return (
		<div className="flex flex-col items-center justify-between p-5 text-gray-600 bar border-r-[1px] border-gray-300 rounded-[0px_45px_45px_0px]">
			<div className="h-full full">
				<img
					src={logo}
					alt="movieBox"
				/>
			</div>

			<div className="flex flex-col justify-between font-semibold text-[20px] w-full">
				<NavLink
					to="/"
					className="flex items-center justify-center"
				>
					<span>
						<FaHome />
					</span>
					Home
				</NavLink>
				<NavLink
					to="/favorites"
					className="flex items-center justify-center"
				>
					<span>
						<FaFilm />
					</span>
					Movies
				</NavLink>
				<NavLink
					to="/"
					className="flex items-center justify-center"
				>
					<span>
						<FaTv />
					</span>
					TV Series
				</NavLink>
				<NavLink
					to="/"
					className="flex items-center justify-center"
				>
					<span>
						<FaCalendar />
					</span>
					Upcoming
				</NavLink>
			</div>

			<div className="bg-[#f8e7eb66] border-2 border-rose border-solid rounded-[20px] p-4 flex flex-col">
				<p className="font-medium">Play movie quizes and earn free tickets</p>
				<small>50k people are playing now</small>
				<button className="rounded-[30px] bg-[#BE123C33] text-rose py-1 px-3 font-medium my-3">
					Start playing
				</button>
			</div>

			<button className="flex items-center font-semibold text-[20px]">
				<span className="mr-1">
					<FaArrowAltCircleRight />
				</span>
				Log Out
			</button>
		</div>
	);
};
