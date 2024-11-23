import UserClass from './UserClasscomponent';
// import User from './userFunction';
const Aboutus = () => {
	return (
		<div className='Aboutme'>
			{/* <User name={'function'} location={'form userFunction'} /> */}
			<UserClass name={'class'} location={'from UserClasscomponent'}/>

		</div>
	);
};
export default Aboutus;
