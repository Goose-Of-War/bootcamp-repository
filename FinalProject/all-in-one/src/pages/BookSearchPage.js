import React from "react";
import InputForm from "../components/InputForm";
import RecordTable from "../components/RecordsTable";

const BookSearchPage = () => {
	const baseURL = 'https://openlibrary.org';
	const [records, setRecords] = React.useState([]);

	const fetchRecords = query => {
		setRecords([]);
		return fetch(`${baseURL}/search.json?title=${query}`)
			.then(response => response.json())
			.then(res => setRecords(res.docs))
			.catch(console.log);
	};


	const handleEvent = event => {
		if (event.key === 'Enter') {
			fetchRecords(event.target.value);
			event.target.value = '';
		}
	};

	return (
		<>
			<h1> Book Search App </h1>
			<InputForm placeholder='Book Title' handleEvent={handleEvent} />
			{
				<RecordTable records={records} />
			}
		</>
	);
};

export default BookSearchPage;
