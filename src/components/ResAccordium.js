import { useState } from 'react';
import AccordiumList from './AccordiumList';

const ResAccordiun = (data) => {
	console.log(data);

	const [showitem, setshowitem] = useState(false);
	const clickhandel = () => {
		setshowitem(!showitem);
	};
	return (
		<div className="">
			<div className="flex flex-col  justify-between  mt-3 bg-slate-300 px-3 rounded-sm shadow-xl pb-2">
				<div
					className="flex justify-between items-center transition ease-in-out delay-150"
					onClick={clickhandel}
				>
					<span className="text-2xl my-2">
						{data.data.card.card.title} ({data.data.card.card.itemCards.length}){' '}
					</span>
					<p className="grayscale cursor-pointer  ">🔻</p>
				</div>
				<div className="">{showitem && <AccordiumList list={data.data.card.card.itemCards} />}</div>
			</div>
		</div>
	);
};
export default ResAccordiun;
