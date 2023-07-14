import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import WeatherPage from './pages/WeatherPage';
import BookSearchPage from './pages/BookSearchPage';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route path='/to-do' element={<TodoPage />} />
				<Route path='/weather' element={<WeatherPage />} />
				<Route path='/book-search' element={<BookSearchPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
