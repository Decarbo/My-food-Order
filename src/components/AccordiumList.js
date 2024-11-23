import { useDispatch } from 'react-redux';
import { addItem } from '../utils/slice';
const AccordiumList = ({ list }) => {
	const dispatch = useDispatch();

	const handeAdd = (list) => {
		dispatch(addItem({ list }));
		console.log(list);
	};
	if (!list && list.length === 0) {
		return null;
	}
	console.log(list);
	return (
		<div>
			{/* key={list.card.info.Id} */}

			<div>
				{list.map((lis) => {
					const data = lis?.list?.card || lis?.card;
					return (
						<div className=" flex justify-between rounded-sm mt-2 bg-white p-2">
							<div className="w-[85%]">
								<p className="font-bold">{data.info.name}</p>
								<p>₹ {data.info.price / 100 || data.info.defaultPrice / 100}</p>
								<p className="truncate">{data.info.description}</p>
							</div>

							<div className=" m-0 p-0 relative border shadow-lg">
								{' '}
								<img
									className="w-[6rem] rounded-r-sm "
									src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.info.imageId}`}
									alt=""
								/>
								<div className="bg-[#f97416bd] absolute ml-[1.20rem] px-2 py-1 text-white rounded-md bottom-[-9px]">
									<button
										className="  "
										onClick={() => handeAdd(lis)}
									>
										Add +
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AccordiumList;
