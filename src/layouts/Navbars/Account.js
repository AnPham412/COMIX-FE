import {useRef, useState} from 'react';
import {useNavigate, Link as RouterLink, useLocation} from 'react-router-dom';
// @mui
import {Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Container} from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
import useAuth from "../../hooks/useAuth";
import {alpha} from "@mui/material/styles";


const MENU_OPTIONS = [
    {
        label: 'Home',
        icon: 'eva:home-fill',
        linkTo: '/',
    },
    {
        label: 'Settings',
        icon: 'eva:settings-2-fill',
        linkTo: 'users/setting',
    },
    {
        label: 'Log Out',
        icon: 'eva:settings-2-fill',
        linkTo: '/login',
    },
];
const GUEST_MENU_OPTIONS = [
    {
        label: 'Log In',
        icon: 'eva:home-fill',
        linkTo: '/login',
    },
    {
        label: 'Register',
        icon: 'eva:person-fill',
        linkTo: '/register',
    },
];
const random = Math.floor(Math.random()*24);
const randomImg = `/static/avatars/avatar_${random}.jpg`

export default function AccountMenuPopover() {
    const anchorRef = useRef(null);
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();
    const [open, setOpen] = useState(null);

    const location = useLocation();

    const from = location.state?.from?.pathname;

    const handleLogout = async () => {
        handleClose();
        logout(() => navigate(from || "/login"))
    };
    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    return (
        <Container>
            {isAuthenticated?(
                <>
                    <IconButton
                        ref={anchorRef}
                        onClick={handleOpen}
                        sx={{
                            p: 0,
                            ...(open && {
                                '&:before': {
                                    zIndex: 1,
                                    content: "''",
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                                },
                            }),
                        }}
                    >
                        <Avatar src={randomImg} alt="photoURL" />
                    </IconButton>
                    <MenuPopover
                        open={Boolean(open)}
                        anchorEl={open}
                        onClose={handleClose}
                        sx={{
                            p: 0,
                            mt: 1.5,
                            ml: 0.75,
                            '& .MuiMenuItem-root': {
                                typography: 'body2',
                                borderRadius: 0.75,
                            },
                        }}

                    >
                        <Stack sx={{ p: 1 }}>
                            {MENU_OPTIONS.map((option) => (
                                <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Stack>

                        <Divider sx={{ borderStyle: 'dashed' }} />

                        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
                            Logout
                        </MenuItem>
                    </MenuPopover>
                </>
            ):(
                <>
                    <IconButton
                        ref={anchorRef}
                        onClick={handleOpen}
                        sx={{
                            p: 0,
                            ...(open && {
                                '&:before': {
                                    zIndex: 1,
                                    content: "''",
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                                },
                            }),
                        }}
                    >
                        <Avatar src={'/static/logo.svg'} alt="photoURL" />

                    </IconButton>

                    <MenuPopover
                        open={Boolean(open)}
                        anchorEl={open}
                        onClose={handleClose}
                        sx={{
                            p: 0,
                            mt: 1.5,
                            ml: 0.75,
                            '& .MuiMenuItem-root': {
                                typography: 'body2',
                                borderRadius: 0.75,
                            },
                        }}

                    >
                        <Box sx={{ my: 1.5, px: 2.5 }}>
                            <Typography variant="subtitle2" noWrap>
                                {user}
                            </Typography>
                        </Box>

                        <Divider sx={{ borderStyle: 'dashed' }} />

                        <Stack sx={{ p: 1 }}>
                            {GUEST_MENU_OPTIONS.map((option) => (
                                <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Stack>
                    </MenuPopover>
                </>
            )}
        </Container>

    );
}