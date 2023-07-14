import React from "react";
import { Box, TextField } from "@mui/material";

const InputForm = ({placeholder, handleEvent}) => {
	return (
		<Box>
			<TextField placeholder={placeholder} onKeyDown={handleEvent} style={{ width: '20%', margin: '10px 40%' }} />
		</Box>
	);
};

export default InputForm;
