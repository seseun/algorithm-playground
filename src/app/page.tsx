import * as React from 'react';
import { Container } from '@mui/material';

import Header from '@/components/Header';

export default function Home() {
    return (
        <Container maxWidth="lg">
            <Header />
        </Container>
    );
}
