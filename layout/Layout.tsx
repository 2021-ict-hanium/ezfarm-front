import { ReactChild } from 'react';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Navigation from './Navigation';

const Global = createGlobalStyle`
  html,
  body {
    width: 100%;
    padding: 0;
    margin: 0;
    color: #1c140d;
    }
  main {
    display:flex;
    width: 100%;
    min-height: calc(100vh - 80px);
    position: relative;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    letter-spacing: -1px;
    font-family: 'Noto Sans';
  }
`;

type Props = {
    children: ReactChild;
    title: string;
    isNavigation?: boolean;
};

const Layout = ({ children, title, isNavigation }: Props) => (
    <>
        <Global />
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <main>
            <CoverImg />
            {isNavigation && <Navigation page={title} />}
            <MainComponent>
                <div>{children}</div>
            </MainComponent>
        </main>
    </>
);

Layout.defaultProps = {
    isNavigation: true,
};

const CoverImg = styled.img.attrs({
    src: '/images/ezfarm_bg.png',
})`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -50;
`;

const MainComponent = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    padding: 0 25px;
    align-items: center;
    & > div {
        flex: 1;
        overflow: visible;
        display: flex;
        flex-direction: column;
    }
`;
export default Layout;
