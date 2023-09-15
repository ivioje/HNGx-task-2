import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="text-[18px] py-16 px-2 text-gray-800">
			<div className="flex items-center justify-center text-[25px]">
				<span className="p-4">
					<FaFacebook />
				</span>
				<span className="p-4">
					<FaInstagram />
				</span>
				<span className="p-4">
					<FaTwitter />
				</span>
				<span className="p-4">
					<FaYoutube />
				</span>
			</div>

			<div className="flex items-center justify-center sm:flex-row flex-col w-full font-bold">
				<a className="p-2">Conditions of Use</a>
				<a className="p-2">Privacy & Policy</a>
				<a className="p-2">Press Room</a>
			</div>

			<div className="flex items-center justify-center w-full font-bold text-gray-400">
				&copy;<span className="px-1"> {new Date().getFullYear()} </span>{" "}
				MovieBox by Ivioje
			</div>
		</div>
	);
};

export default Footer;
