import { useState } from 'react';

const User = ({ name, location }) => {
	const [count] = useState(1);
	const [count2] = useState(2);

	return (
		<div>
			<strong>Niraj Prajapati</strong>
			<p>{name}</p>
			<p>{location}</p>
			<p>variable count1 : {count}</p>
			<p>variable count2 : {count2}</p>
		</div>
	);
};

export default User;
