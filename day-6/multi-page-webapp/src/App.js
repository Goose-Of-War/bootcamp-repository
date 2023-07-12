import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import SignUp from './pages/Signup';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
		</Router>
		// <div> <Navbar/ > </div>
	);
};

export default App;
