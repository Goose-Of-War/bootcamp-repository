import { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

const baseURL = 'https://openlibrary.org';

export function searchBooks (query) {
	if (!query) return new Promise(r => r({ docs: [] }));
	const url = new URL(baseURL + '/search.json');
	url.searchParams.append('title', query);
	return fetch(url).then(response => response.json()).catch(console.log);
};

const HeaderCell = ({ className, children }) => {
	return (
		<TableCell style={{
			color: '#efefef',
			fontSize: '100%'
		}} className={className}>{children}</TableCell>
	);
}

const BodyCell = ({ children }) => {
	return (
		<TableCell style={{
			padding: '8px 16px',
			fontWeight: '300'
		}}
		>{ children }</TableCell>
	);
};

export function Search () {
	const [results, setResults] = useState(0);
	const [loading, setLoading] = useState(false);

	const handleSearch = (event) => {
		searchBooks(event.target.value).then(response => {
			setResults(response.docs);
			setLoading(false);
		});
		setLoading(true);
	};

	const resultList = (results || []).map((book, index) => (
		<TableRow style={{
			backgroundColor: index % 2 ? '#acacac' : '#dadada',
		}}>
			<BodyCell> { book.title } </BodyCell>
			<BodyCell> { book.author_name && book.author_name.join(', ') } </BodyCell>
			<BodyCell> { book.first_publish_year } </BodyCell>
		</TableRow>
	))

	return (
		<div>
			<Box style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}>
				<TextField variant='outlined' type='search' label='Search' margin='normal' onChange={ handleSearch }/>
			</Box>
			<h1 className='h1'> Search Results </h1>
			<TableContainer style={{
				width: '80%',
				margin: '10px auto',
				border: 'solid 1px',
				borderRadius: '5px'
			}}>
				<Table>
					<TableHead style={{
						backgroundColor: '#636363',
					}}>
						<TableRow>
							<HeaderCell className='title-col'> Title </HeaderCell>
							<HeaderCell className='author-col'> Author </HeaderCell>
							<HeaderCell className='year-col'> Year </HeaderCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{ loading ? <TableRow>
							<BodyCell> Loading... </BodyCell>
						</TableRow> : '' }
						{ resultList }
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
