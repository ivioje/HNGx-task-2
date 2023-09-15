import { TailSpin } from "react-loader-spinner";

const Loader = () => {
	return (
		<div className="flex items-center justify-center flex-col h-[80vh]">
			<TailSpin
				height="100"
				width="100"
				color="#BE123C"
				ariaLabel="tail-spin-loading"
				radius="3"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
			<small className="text-[10px] text-red-700">
				Confirm if the movie ID you entered exists.
			</small>
		</div>
	);
};

export default Loader;
