import { ReactChild } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from './Header';
import Navigation from './Navigation';
import Global from '../../styles/Global';

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
            {isNavigation ? (
                <Navigation page={title} />
            ) : (
                <Hr>
                    <span className="line" />
                    <span className="circle" />
                </Hr>
            )}
            <MainComponent>{children}</MainComponent>
        </main>
    </>
);

Layout.defaultProps = {
    isNavigation: true,
};

const Hr = styled.div`
    position: relative;
    min-width: 400px;
    margin-top: 127px;
    .line {
        position: absolute;
        top: 10px;
        width: 330px;
        height: 10px;
        background-color: #ffffff;
    }
    .circle {
        position: absolute;
        left: 320px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #ffffff;
    }
    animation: left-to-right-slide 0.9s;
`;

const CoverImg = styled.img.attrs({
    src: '/images/ezfarm_bg.png',
})`
    position: absolute;
    top: 0;
    width: 100%;
    min-width: 1150px;
    height: 100%;
    z-index: -50;
`;

const MainComponent = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    position: relative;
    /* width: 950px; */
    height: 100%;
    padding: 0 25px;
    align-items: center;
`;
export default Layout;
