'use client';
import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

import theme from '@/theme';

export default function Provider(props: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline enableColorScheme />
                {props.children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
