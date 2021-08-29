import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import wrapper from '../store/create';
import Global from '../styles/GlobalStyle';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Global />
        <ThemeProvider theme={theme}>
            <Component />
        </ThemeProvider>
    </>
);
export default wrapper.withRedux(MyApp);
