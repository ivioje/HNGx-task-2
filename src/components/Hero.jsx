import React from "react";

import Navbar from "./Navbar";
import imdbLogo from "../assets/imdb.png";

const Hero = () => {
	return (
		<>
			<div className="hero sm:h-[100vh] h-full w-full font-dmSans text-white sm:px-16 px-2 pb-4">
				<Navbar />

				<div className="sm:w-[410px] p-1 sm:mt-20 my-20 xs:w-[80%] w-full sm:block flex items-center flex-col">
					<h1 className="font-bold sm:text-[48px] xs:text-[38px] ss:text-[30px] text-[25px] py-1">
						John Wick 3: Parabellum
					</h1>
					<div className="flex items-center justify-start">
						<div className="flex items-center py-1 font-normal">
							<img
								src={imdbLogo}
								alt="imdb"
								className="w-full h-full mr-2"
							/>
							<span>860/100</span>
						</div>
						<div className="py-1 mx-2">
							<span>🍅 97%</span>
						</div>
					</div>
					<p className="font-medium leading-[18px] py-1 sm:w-auto w-[90%]">
						John Wick is on the run after killing a member of the international
						assassins' guild, and with a $14 million price tag on his head, he
						is the target of hit men and women everywhere.
					</p>
					<button className="my-2 inline-flex sm:items-center items-start gap-[8px] px-[16px] py-[6px] relative bg-rose rounded-[6px] all-[unset] box-border">
						<div className="relative w-fit mt-[-1.00px] font-bold text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
							WATCH TRAILER
						</div>
					</button>
				</div>

				<div className="flex items-center flex-col px-3 text-[12px] absolute text-gray-400 right-0 top-[50%]">
					<small className="py-1">1</small>
					<small className="py-1">2</small>
					<div className="w-5 h-[2px] bg-white absolute top-14 mr-10" />
					<small className="py-1 text-[13px] text-medium text-white">3</small>
					<small className="py-1">4</small>
					<small className="py-1">5</small>
				</div>
			</div>
		</>
	);
};

export default Hero;
