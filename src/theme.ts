'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    cssVariables: true,
    palette: {
        mode: 'dark'
    },
    typography: {
        fontFamily: `'Pretendard Variable', Pretendard, -apple-system,
        BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
        'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif`
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { severity: 'info' },
                            style: {
                                backgroundColor: '#60a5fa'
                            }
                        }
                    ]
                }
            }
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    h5: 'h5',
                    h6: 'h6',
                    subtitle1: 'h6',
                    subtitle2: 'h6',
                    body1: 'p',
                    body2: 'p'
                }
            }
        }
    }
});

export default theme;
