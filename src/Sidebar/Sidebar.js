import * as React from 'react';
import { Box, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';

export default function Sidebar ({ user }) {

  return (
    <Box
      sx={{ width: 250, ml: 5 }}
      role="presentation"
    >
      <List>
        <ListItem >
          <Welcome user={user.username} /> 
        </ListItem>
      </List>
    <Divider />
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <UploadIcon />
          </ListItemIcon>
          <ListItemText primary='Upload File' />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
  )

}

const Welcome = ({user}) => {

  return (
    `Welcome ${user}`
  )
}
