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
    width: 100%;
    height: 80px;
    filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.1));
    background-color: #ffffff;
    border: 1px solid #e2e2e2;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
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
