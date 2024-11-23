import { useEffect, useState } from 'react';
import ResContainer, { PromotedLabel } from './ResContainer';
import Shimer from './Shimer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

// import { Reslist } from "../utils/mockdata";

const Body = () => {
	const [listRes, setlistRes] = useState([]);
	const [Searchtext, setSearchtext] = useState('');
	const [cardfilter, setcardfilter] = useState([]);

	const filterhandel = () => {
		const filteredList = cardfilter.filter((res) => {
			return res.info.avgRating > 4.3;
		});
		setcardfilter(filteredList);
	};

	const searchhandel = () => {
		console.log(Searchtext);
		const filterdcard = listRes.filter((res) => res.info.name?.toLowerCase().includes(Searchtext.toLowerCase()));
		setcardfilter(filterdcard);
	};

	useEffect(() => {
		fetchdata();
	}, []);

	const fetchdata = async () => {
		const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.60050&lng=85.11470&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
		const json = await data.json();
		console.log(json.data.cards[1].card.card.gridElements?.infoWithStyle.restaurants);
		setlistRes(json.data.cards[1].card.card.gridElements?.infoWithStyle.restaurants);
		setcardfilter(json.data.cards[1].card.card.gridElements?.infoWithStyle.restaurants);
	};

	//conditional rendring
	// if (listRes.length === 0) {
	// 	return <Shimer />;

	// }

	const OnlineStatus = useOnlineStatus();
	if (OnlineStatus === false) return <h1>offline</h1>;

	const PromotedLabelCard = PromotedLabel(ResContainer);

	return listRes.length === 0 ? (
		<Shimer />
	) : (
		<div className="px-8 mt-4 body">
			<div className="flex justify-between">
				<div className="flex items-center justify-center w-9/12 border rounded-md border-orange-500/75">
					<input
						className="text-[#404343] rounded-l-md font-semibold text-lg h-10 border border-orange-500/75 outline-0 w-full pl-4"
						type="text"
						value={Searchtext}
						onChange={(e) => {
							setSearchtext(e.target.value);
						}}
					/>
					<button
						className="px-4 py-2 font-bold text-white bg-orange-500 rounded-r searchbtn hover:bg-orange-700"
						onClick={searchhandel}
					>
						Search
					</button>
				</div>
				<div className="filter ">
					<button
						onClick={filterhandel}
						className="px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-700"
					>
						FILTER
					</button>
				</div>
			</div>
			<div className="flex flex-wrap justify-evenly gap-8 my-8 qq ">
				{cardfilter.map((resturent) => (
					<Link
						key={resturent.info.id}
						to={'/Resturent/' + resturent.info.id}
					>
						{resturent.info.avgRating > 4.2 ? <PromotedLabelCard resData={resturent} /> : <ResContainer resData={resturent} />}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
