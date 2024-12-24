import type { Metadata } from 'next';
import { Viewport } from 'next/dist/lib/metadata/types/metadata-interface';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';

import '@/styles/global.css';

import Provider from './provider';

export const metadata: Metadata = {
    title: 'Hello, Next🪄',
    description: `this is seseun's next.js basic project.`
};

export const viewport: Viewport = {
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: false,
    width: 'device-width'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
