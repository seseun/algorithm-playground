import * as React from 'react';
import {
    AppBar,
    Box,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar
} from '@mui/material';

const navItems = [
    {
        label: 'Array',
        href: '/array'
    },
    {
        label: 'Object',
        href: '/object'
    }
];

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <List
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                        {navItems.map((item, index) => (
                            <ListItem
                                key={`header-item-${index}`}
                                disablePadding>
                                <Link href={item.href}>{item.label}</Link>
                            </ListItem>
                        ))}
                    </List>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
