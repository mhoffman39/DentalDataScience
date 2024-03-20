import { useState } from "react";
import {AppBar, Grid, Card, CardMedia, Toolbar, IconButton, Typography, Menu, Container, Avatar, Tooltip, MenuItem} from '@mui/material/';
import logo from './Images/AIV.jpg';

export default function MenuBar({signOut, user}) {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container justifyContent={'space-between'}>
            <Grid item>
              <Card>
                <CardMedia
                  component="img"
                  height="65"
                  image={logo}
                  alt="Company logo"
                />
              </Card>
            </Grid>

            <Grid item>
              <Tooltip title="Open settings">
                <IconButton onClick={()=>setProfileMenuOpen(true)} sx={{ p: 2 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                // anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={profileMenuOpen}
                onClose={()=> setProfileMenuOpen(false)}
              >
                <MenuItem onClick={() => signOut()}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
