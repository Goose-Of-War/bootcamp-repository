import React from "react";
import { Tab, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Tabs } from '@mui/material';

const RecordTable = ({ records }) => {
	const [page, setPage] = React.useState(0);
	return (
		<Table sx={{ width: '80%', margin: 'auto' }}>
			<TableHead>
				<TableRow>
					<TableCell sx={{ fontWeight: 'bold' }}> Title </TableCell>
					<TableCell sx={{ fontWeight: 'bold' }}> Author </TableCell>
					<TableCell sx={{ fontWeight: 'bold' }}> Year </TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{
					(records || []).filter((_,i) => page * 15 < i && i < (page + 1) * 15).map((record, index) => (
						<TableRow key={index}>
							<TableCell>{ record.title }</TableCell>
							<TableCell>{ record.author_name && record.author_name.join(', ') }</TableCell>
							<TableCell>{ record.year }</TableCell>
						</TableRow>
					))
				}
			</TableBody>
			<TableFooter>
				<Tabs value={page} onChange={(event, value) => setPage(value)}>
					{
						[...Array(Math.ceil(page / 15))].map((_, i) => <Tab label={i + 1} key={i}/>)
					}
				</Tabs>
			</TableFooter>
		</Table>
	);
};

export default RecordTable;
