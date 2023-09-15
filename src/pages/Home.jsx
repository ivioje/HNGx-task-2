import React, { useContext } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { AppContext } from "../context/GlobalContext";

const Home = () => {
	const { data } = useContext(AppContext);
	return (
		<>
			<Hero />
			<Card data={data} />
			<Footer />
		</>
	);
};

export default Home;
