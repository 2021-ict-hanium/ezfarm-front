import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Header from './Header';
import Navigation from './Navigation';
import ProfileModifyModalContainer from './profileModifyModal/ProfileModifyModalContainer';
import { RootState } from '../../redux/modules/reducer';

type Props = {
    children: React.ReactNode;
    title: string;
    isNavigation?: boolean;
};

const Layout = ({ children, title, isNavigation }: Props) => {
    const { isProfileModifyModalVisible } = useSelector((state: RootState) => state.modal);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>{title}</title>
            </Head>
            <Header />
            <Main>
                {isNavigation ? (
                    <Navigation page={title} />
                ) : (
                    <Hr>
                        <span className="line" />
                        <span className="circle" />
                    </Hr>
                )}
                <MainComponent>{children}</MainComponent>
                {isProfileModifyModalVisible && <ProfileModifyModalContainer />}
            </Main>
        </>
    );
};

Layout.defaultProps = {
    isNavigation: true,
};

const Main = styled.main`
    background: url('/images/ezfarm_bg.png');
    height: min-content;
    min-height: 100vh;
    width: min-content;
    min-width: 1920px;
`;

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
