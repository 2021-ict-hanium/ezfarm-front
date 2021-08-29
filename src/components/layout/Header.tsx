/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Avatar, Menu, Dropdown } from '../../src/node_modules/antd';
import { UserOutlined, DownOutlined } from '../../src/node_modules/@ant-design/icons';

import React, { useCallback, useState } from '../../src/node_modules/@types/react';
import styled from '../../src/node_modules/@types/styled-components';
import { useDispatch, useSelector } from '../../src/node_modules/react-redux';
import Link from '../../src/node_modules/next/link';
import { RootState } from '../../src/reducers';
import { logOutRequest } from '../../actions/user';
import { profileModifyModalOpen } from '../../actions/modal';

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
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            {/* <UserTap>
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
            </UserTap> */}
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
    width: 180px;
    cursor: pointer;
`;

const UserTap = styled.div`
    // border: 1px solid black;
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default Header;