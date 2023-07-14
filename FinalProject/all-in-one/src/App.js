import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import WeatherPage from './pages/WeatherPage';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/to-do' element={<TodoPage />} />
				<Route path='/weather' element={<WeatherPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
