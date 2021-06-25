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
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
    z-index: -50;
`;

const MainComponent = styled.div`
    width: 100%;
    padding: 5rem;
    flex-grow: 1;
    div {
        max-width: 1200px;
    }
`;
export default Layout;
