import React from "react";
import { Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs } from '@mui/material';

const RecordTable = ({ records }) => {
	const [page, setPage] = React.useState(0);
	if (!records.length) return (<></>);
	return (
		<>
			<Tabs value={page} onChange={(event, value) => setPage(value)} sx={{ width: 'fit-content', margin: 'auto' }}>
				{
					[...Array(Math.ceil(records.length / 10))].map((_, i) => <Tab label={i + 1} key={i} />)
				}
			</Tabs>
			<Table sx={{ width: '80%', margin: '30px auto', border: 'solid 1px', borderRadius: '30px' }}>
				<TableHead>
					<TableRow>
						<TableCell sx={{ fontWeight: 'bold' }}> Title </TableCell>
						<TableCell sx={{ fontWeight: 'bold' }}> Author </TableCell>
						<TableCell sx={{ fontWeight: 'bold' }}> Year </TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						(records || []).filter((_,i) => page * 10 < i && i < (page + 1) * 10).map((record, index) => (
							<TableRow key={index}>
								<TableCell>{ record.title }</TableCell>
								<TableCell>{ record.author_name && record.author_name.join(', ') }</TableCell>
								<TableCell>{ record.publish_year?.pop() }</TableCell>
							</TableRow>
						))
					}
				</TableBody>
			</Table>
			<Tabs value={page} onChange={(event, value) => setPage(value)} sx={{ width: 'fit-content', margin: 'auto' }}>
				{
					[...Array(Math.ceil(records.length / 10))].map((_, i) => <Tab label={i + 1} key={i} />)
				}
			</Tabs>
		</>
	);
};

export default RecordTable;
