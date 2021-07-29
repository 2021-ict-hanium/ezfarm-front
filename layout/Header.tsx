/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';

import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { logOutRequest } from '../actions/user';
import { profileModifyModalOpen } from '../actions/modal';

const Header = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state: RootState) => state.user);

    const [visible, setVisible] = useState(false);

    const handleVisibleChange = useCallback((flag: boolean) => {
        setVisible(flag);
    }, []);

    const handleLogOut = useCallback(() => {
        dispatch(logOutRequest());
    }, [dispatch]);

    const profileMoidfy = useCallback(() => {
        dispatch(profileModifyModalOpen());
    }, [dispatch]);

    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={profileMoidfy}>
                회원정보 수정
            </Menu.Item>
            <Menu.Item key="2" onClick={handleLogOut}>
                로그아웃
            </Menu.Item>
        </Menu>
    );

    return (
        <Wrapper>
            <Logo />
            <UserTap>
                {me && (
                    <>
                        {me.imageUrl ? <Avatar src={me.imageUrl} /> : <Avatar icon={<UserOutlined />} />}
                        <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={visible}>
                            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                                {me.name}
                                <DownOutlined />
                            </a>
                        </Dropdown>
                    </>
                )}
            </UserTap>
            <Gif />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    // border: 1px solid black;
    width: 100%;
    min-width: 1150px;
    height: 80px;
    filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.1));
    background-color: #ffffff;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    position: relative;
`;

const Logo = styled.img.attrs({
    src: '/images/logo.png',
})`
    /* border: 1px solid black; */
    width: 200px;
    cursor: pointer;
`;

const Gif = styled.img.attrs({
    src: 'https://media.giphy.com/media/TjeHxgT2F09P71rlhB/giphy.gif',
})`
    /* border: 1px solid black; */
    position: absolute;
    left: 350px;
    width: 100px;
    animation: move 5s linear infinite;
    @keyframes move {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(400px);
        }
    }
`;

const UserTap = styled.div`
    // border: 1px solid black;
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default Header;
