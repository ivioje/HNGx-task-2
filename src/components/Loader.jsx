import { TailSpin } from "react-loader-spinner";

const Loader = () => {
	return (
		<div className="flex items-center justify-center h-[80vh]">
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
		</div>
	);
};

export default Loader;
