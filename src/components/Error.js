import { useRouteError } from 'react-router-dom';

const Error = () => {
	const err = useRouteError();
	// console.log(err);
	return (
		<div>
			<h2>404 Not found</h2>

			{/* <p>Galat batt mat karo</p> */}
			<h3>
				{err.status}: {err.statusText}
			</h3>
		</div>
	);
};
export default Error;
