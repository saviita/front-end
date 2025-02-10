import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Challenge from '../pages/Challenge/Challenge';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/challenge' element={<Challenge />} />
		</Routes>
	);
};

export default Router;
