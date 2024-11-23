import { useState, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import usercontex from '../utils/usercontex';
import { useSelector } from 'react-redux';

const Navigation = () => {
	const [Btndo, setBtndo] = useState('login');
	const handleButtonClick = () => {
		Btndo === 'login' ? setBtndo('logout') : setBtndo('login');
	};

	const { loogedinUser } = useContext(usercontex);
	// console.log(data);
	const OnlineStatus = useOnlineStatus();


//subscribing to the cartslice
		const cart = useSelector((store) => store.carttt.items)


	return (
		<div className="px-8 mt-4">
			<nav className="flex items-centere justify-between font-semibold  ">
				<div>
					<h1 className="logo">Logo</h1>
				</div>

				<div className="	 ">
					<ul className="flex justify-center gap-8 ">
						<li className="">
							<Link to="/">Home</Link>{' '}
						</li>
						<li>
							<Link to="/About">About</Link>
						</li>
						<li>
							<Link to="/Contact">contact</Link>
						</li>
						<li>
							<Link to="/Grocery">Grocery</Link>
						</li>
						{/* <li>
							<Link to='/Resturent/:resId'>Resturent</Link>
						</li> */}
						<li>
							<span>
								{loogedinUser}
								{OnlineStatus ? '🟢' : '🔴'}
							</span>{' '}
						</li>
						<li>
							<Link to="/Cart"><i className="fa-solid fa-cart-shopping"></i>
							<span>({cart.length}items)</span></Link>
						</li>

						<li>
							<button
								onClick={handleButtonClick}
								className="bg-orange-500 hover:bg-orange-700 text-white font-bold  px-4 rounded"
							>
								{Btndo}
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
