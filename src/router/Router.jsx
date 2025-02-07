import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/src/pages/Challenge/Challenge.jsx' element={<Home />} />
		</Routes>
	);
};

export default Router;
