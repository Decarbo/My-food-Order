import { useSelector } from 'react-redux';
import AccordiumList from './AccordiumList';

const Cart = () => {
	const cartItems = useSelector((store) => store.carttt.items);
	console.log(cartItems);
	return (
		<div>
			<h1>
				<AccordiumList list={cartItems} />
			</h1>
		</div>
	);
};
export default Cart;
