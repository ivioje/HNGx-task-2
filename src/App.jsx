import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";
import ErrorBoundary from "./components/ErrorBoundary";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			{/*Error boundary */}
			<ErrorBoundary>
				{/*Notifications */}
				<ToastContainer />

				{/*App routes */}
				<Router>
					<Routes>
						<Route
							path="/"
							exact
							element={<Home />}
						/>
						<Route
							path="/movie/:id"
							element={<MovieDetails />}
						/>
						<Route
							path="*"
							element={<Home />}
						/>
					</Routes>
				</Router>
				<Footer />
			</ErrorBoundary>
		</>
	);
};

// image URLs
export const img_300 = "https://image.tmdb.org/t/p/w300";
export const originalWidth = "https://image.tmdb.org/t/p/original";
export const unavailable =
	"https://www.movienewz.com/img/films/poster-holder.jpg";

export default App;
