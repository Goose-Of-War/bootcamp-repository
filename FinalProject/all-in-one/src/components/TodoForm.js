import React from "react";
import { Box, TextField, Button } from "@mui/material";

const TodoForm = ({handleEvent}) => {
	return (
		<Box>
			<TextField placeholder='New Task' onKeyDown={handleEvent} style={{ width: '20%', margin: '10px 40%' }} />
		</Box>
	);
};

export default TodoForm;
