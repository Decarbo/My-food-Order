import React from 'react';
import Shimer from './Shimer';
import usercontex from '../utils/usercontex';
class UserClass extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userinfo: {
				login: '',
				location: 'dummy location',
				sahimer: <Shimer />,
			},
		};
	}
	async componentDidMount() {
		const data = await fetch('https://api.github.com/users/decarbo');
		const json = await data.json();
		console.log(json);
		this.setState({
			userinfo: json,
		});
	}

	render() {
		const { login, avatar_url, sahimer } = this.state?.userinfo;
		return (
			<div className="Aboutme flex gap-8">
				<div>
					{' '}
					<img
						className="w-20 rounded-[50%]"
						src={avatar_url}
						alt=""
					/>
				</div>
				<div>
					{/* <h1>{login}</h1> */}
					<div>{sahimer}</div>
					<div>
						<usercontex.Consumer>{({ loogedinUser }) => <h1>{loogedinUser}</h1>}</usercontex.Consumer>
					</div>
				</div>
			</div>
		);
	}
}

export default UserClass;
