import { ReactChild } from 'react';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Navigation from './Navigation';

const Global = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    color: #1c140d;
    }

  #__next {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main{
    display:flex;
    width: 100%;
    height: 100%;
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
};

const Layout = ({ children, title }: Props) => (
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
            <Navigation page={title} />
            <MainComponent>
                <div>{children}</div>
            </MainComponent>
        </main>
    </>
);

const CoverImg = styled.img.attrs({
    src: '/images/ezfarm_bg.png',
})`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    min-height: 800px;
    z-index: -50;
`;

const MainComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    & > div {
        flex: 1;
        overflow: visible;
        display: flex;
        flex-direction: column;
    }
`;
export default Layout;
