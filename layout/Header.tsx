/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
    const [visible, setVisible] = useState(false);

    const handleVisibleChange = (flag: boolean) => {
        setVisible(flag);
    };

    const menu = (
        <Menu>
            <Menu.Item key="1">회원정보 수정</Menu.Item>
            <Menu.Item key="2">로그아웃</Menu.Item>
        </Menu>
    );
    return (
        <Wrapper>
            <Logo>Ezfarm</Logo>
            <UserTap>
                <Avatar icon={<UserOutlined />} />
                <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={visible}>
                    <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                        username <DownOutlined />
                    </a>
                </Dropdown>
            </UserTap>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    // border: 1px solid black;
    position: relative;
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    border-bottom: 2px solid rgba(128, 128, 128, 0.3);
`;

const Logo = styled.div`
    // border: 1px solid black;
    width: 4rem;
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
