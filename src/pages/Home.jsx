import React from "react";
import Hero from "../components/Hero";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Home = ({ data }) => {
	return (
		<>
			<Hero />
			<Card data={data} />
			<Footer />
		</>
	);
};

export default Home;
