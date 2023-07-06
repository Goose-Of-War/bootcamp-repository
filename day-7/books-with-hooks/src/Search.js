import { useState } from 'react';

const baseURL = 'http://openlibrary.org';

export function searchBooks (query) {
	const url = new URL(baseURL + '/search.json');
	url.searchParams.append('title', query);
	return fetch(url).then(response => response.json());
};

export function Search () {
	const [results, setResults] = useState(0);

	const handleSearch = (event) => {
		searchBooks(event.target.value).then(response => setResults(response.docs));
	};

	const resultList = (results || []).map(book => (
		<tr>
			<td> { book.title } </td>
			<td> { book.author_name && book.author_name.join(', ') } </td>
			<td> { book.first_publish_year } </td>
		</tr>
	))

	return (
		<div>
			<div>
				<input className='search-input' type='text' onChange={ handleSearch }/>
			</div>
			<h1 className='h1'> Search Results </h1>
			<div>
				<table>
					<thead>
						<tr>
							<th className='title-col'> Title </th>
							<th className='author-col'> Author </th>
							<th className='year-col'> Year </th>
						</tr>
					</thead>
					<tbody> { resultList } </tbody>
				</table>
			</div>
		</div>
	);
};
