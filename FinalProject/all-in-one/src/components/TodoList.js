import React from "react";
import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'

const TodoList = ({ list, removeTodo, checkTodo }) => {
	return (
		<List style={{
			width: '50%',
			margin: 'auto',
			border: 'solid 2px',
			borderRadius: '1vw'
		}}>
			{(list ?? []).map((item, index) => (
				<ListItem key={index} dense secondaryAction={
					<IconButton edge='end' onClick={() => removeTodo(index)}>
						<DeleteIcon />
					</IconButton>
				}>
					<ListItemButton role={undefined} onClick={() => checkTodo(index)}>
						<Checkbox edge='start' checked={item.checked} tabIndex={-1} disableRipple onChange={() => checkTodo(index)} />
						<ListItemText primary={ item.value }  />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);
};

export default TodoList;
