// import { ResList } from "../utils/mockdata";
// import Body from "./Body";
const ResContainer = ({ resData }) => {
	// const resdata = props;
	// console.log(resData);
	return (
		<div className="card flex flex-grow justify-evenly flex-col cursor-pointer leading-5 p-1 rounded-md  w-[300px] transition duration-300 border border-gray-700  ">
			<div className="cardimg">
				<img
					className="rounded-md w-full h-[220px] bg-auto   hover:scale-[0.98] transition duration-300"
					src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
					alt=""
				/>
			</div>
			<div className="leading-6 capitalize cardtext">
				<div>
					<h3 className="my-1 font-semibold truncate ">{resData?.info?.name} </h3>
				</div>
				<p>Price: {resData?.info?.costForTwo}</p>
				<p className="truncate"> areaName : {resData?.info?.areaName}</p>
				<p className="truncate">cuisines :{resData?.info?.cuisines.join(', ')}</p>
				<p>rate :{resData?.info?.avgRating}</p>
			</div>
		</div>
	);
};
//    =------------ Higher Order Fn ---------------=

export const PromotedLabel = (ResContainer) => {
	return (props) => {
		return (
			<div>
				<label className="absolute z-10 px-2 mr-10 text-yellow-100 bg-orange-600 rounded-tl-md">Promoted</label>
				<ResContainer {...props} />
			</div>
		);
	};
};

export default ResContainer;
