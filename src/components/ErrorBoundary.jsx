import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		setHasError(false);
	}, [children]);

	// Error handling function
	const handleError = (error, errorInfo) => {
		setHasError(true);
	};

	if (hasError) {
		// Render an error message or fallback UI
		return <div>Oops! An error has occured. Try again later...</div>;
	}

	// Render children normally if there are no errors
	return children;
};

export default ErrorBoundary;
