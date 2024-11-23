// import { useEffect, useState } from 'react';
import Shimer from './Shimer';
import { useParams } from 'react-router-dom';
import useRestmenu from '../utils/useRestmenu';
import ResAccordiun from './ResAccordium';
const Restaurant = () => {
	// const [resinfo, setresinfo] = useState([]);
	const { resId } = useParams();
	const resinfo = useRestmenu(resId);
	console.log(resinfo);
	// const { restId } =resinfo?.cards?.[3].card.card.gridElements.infoWithStyle.offers[0].info.restId;
	// console.log(resinfo?.cards?.[3].card.card.gridElements.infoWithStyle.offers[0].info.restId);

	// useEffect(() => {
	// 	fetchapi();
	// }, []);

	// const fetchapi = async () => {
	// 	const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=' + resId + '&catalog_qa=undefined&submitAction=ENTER');

	// 	const json = await data.json();
	// 	console.log(json);
	// 	setresinfo(json.data);
	// };

	if (resinfo === null) return <Shimer />;

	const { name } = resinfo.cards[2].card.card.info;
	// const { itemCards } = resinfo.cards?.[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card; // itemcard array hai
	const categories = resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => c.card.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
	// const categories= resinfo.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter((c)=> c.card.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
	console.log(categories);
	return (
		<div className="menue  mt-8 max-w-[1000px] mx-auto">
			<div className="mx-8">
				<h1 className="text-5xl font-bold">{name}</h1>

				{categories.map((cat) => {
					return <ResAccordiun data= {cat} />;
				})}

				{/* <ul>
					{itemCards?.map((item) => (
						<li key={item.card.info.id}>
							<div className="flex content-between gap-8 p-4 mt-8 bg-slate-300 rounded-xl ">
								<div className="w-[80%] ">
									<span className="font-bold">{item.card.info.name}</span>
									<p> ₹ {item.card.info.price / 100}</p>
									<p>
										{' '}
										{item.card.info.ratings.aggregatedRating.rating} (<span>{item.card.info.ratings.aggregatedRating.ratingCountV2}</span>)
									</p>
									<p className="truncate">{item.card.info.description}</p>
								</div>
								<div className=" flex justify-center w-[20%]">
									<img
										className="w-full"
										src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/a77bed0a24583af1e91932f40fdf1fc2`}
									/>

								</div>
							</div>
						</li>
					))}
				</ul> */}
			</div>
		</div>
	);
};
export default Restaurant;

// const Resturent = () => {
// 	const [Resinfo, setResinfo] = useState([]);
// 	useEffect(() => {
// 		Resinfoapi();
// 	}, []);
// 	const Resinfoapi = async () => {
// 		const ResinfoData = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.60050&lng=85.11470&restaurantId=542816&catalog_qa=undefined&submitAction=ENTER ');

// 		const json = await ResinfoData.json();
// 		// console.log(json);
// 		setResinfo(json.data);
// 	};
// console.log(Resinfo);

// const resturents1 = Resinfo?.cards?.find((c) => c?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant');
// console.log(resturents1);
// if (!resturents1) return <Shimer />;
// console.log(resturents?.card?.card?.info);

// const { name, costForTwoMessage, city } = resturents1?.card?.card?.info;
// const {reccomend}= .info
// const resturents2 = Resinfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.find((w) => w?.['@type' ==='type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge'])
// console.log(resturents2);
// const { ww } = resturents2?.info?.name;

// const {name} = Resinfo?.cards[0].card.card

// const {resturents2} = Resinfo?.cards?.find((c) => c?.cards?.[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge');
// console.log(resturents2);
// const{name}=Resinfo.cards?.[4]?.groupedCard.cardGroupMap.REGULAR.cards[5]?.card.card.itemCards[0]?.card.info

// 	return (
// 		<div className='ResMenu'>
// 			<h1>{name}</h1>

// 			<ul>
// 				{/* <li>{resturents2?.info.name}</li> */}
// 			</ul>
// 		</div>
// 	);
// };

// export default Resturent;
