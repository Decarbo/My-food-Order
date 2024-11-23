import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import ResContainer from "./src/components/ResContainer";
// import ResList from "./src/components/ResList";
import Body from './components/Body';
import Navigation from './components/Navigation';
// import Aboutus from './src/components/About';
import Contact from './components/Contact';
import Error from './components/Error';
// import Resturent from './src/components/ResMenu';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Shimer from './components/Shimer';
import usercontex from './utils/usercontex';

import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
// import Grocery from './src/components/Grocery';

// //react element

// // const heading = React.createElement("h1", { id: "head" }, "first heaing");

// // console.log(heading);

// //jsx

// //React Element
// const Jsx = <h3>headingggggggggggggg</h3>;

// // console.log(object);

// //functional component-----(ParcelCase)

// const HeadingComponent = () => (
//     <div id="main">
//         <h2>react functional component</h2>
//     </div>
// );

// const happy = React.createElement("div", { className: "title" }, [
//     React.createElement("h1", null, "heading1"),
//     React.createElement("h2", null, "heading2"),
//     React.createElement("h2", null, "heading3"),
// ]);

// ---------------------by jsx---------------

// const happy = <div>
//     <h1>heading1</h1>
//     <h2>heading2</h2>
//     <h3>heading3</h3>
// </div>

//-------------------by FunctionalComponent

const Grocery = lazy(() => import('./components/Grocery'));
const Resturent = lazy(() => import('./components/ResMenu'));
const Aboutus = lazy(() => import('./components/About'));

const AppLayout = () => {
	const [username, setusername] = useState();

	useEffect(() => {
		const data = {
			name: 'niraj',
		};
		setusername(data.name);
	}, []);

	return (
		<Provider store={appStore}>
			<usercontex.Provider value={{ loogedinUser: username }}>
				<div className="">
					<Navigation />

					<Outlet />
				</div>
			</usercontex.Provider>
		</Provider>
	);
};

export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Body />,
			},
			{
				path: '/About',
				element: (
					<Suspense fallback={<Shimer />}>
						<Aboutus />
					</Suspense>
				),
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/Cart',
				element: <Cart />,
			},
			{
				path: '/grocery',
				element: (
					<Suspense fallback={<Shimer />}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: '/Resturent/:resId',
				element: (
					<Suspense fallback={<Shimer />}>
						<Resturent />
					</Suspense>
				),
			},
		],
		errorElement: <Error />,
	},
]);
