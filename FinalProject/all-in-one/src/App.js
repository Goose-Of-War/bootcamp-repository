import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/to-do' element={<TodoPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
