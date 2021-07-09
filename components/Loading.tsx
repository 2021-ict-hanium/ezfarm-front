import { Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Loading = () => (
    <Overlay>
        <Spin size="large" tip="Loading..." style={{ marginTop: '400px' }} />
    </Overlay>
);

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: center;
`;

export default Loading;
