import { useEffect, useState } from 'react';
// import Restaurant from '../components/ResMenu';
const useRestmenu = (resId) => {
	const [resinfo, setresinfo] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		// const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=' + resId + '&catalog_qa=undefined&submitAction=ENTER');
		const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.60050&lng=85.11470&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")

		const json = await data.json();
		// console.log(json.data);
		setresinfo(json.data);
	};
	console.log(resinfo);
	return resinfo;
};
export default useRestmenu;
