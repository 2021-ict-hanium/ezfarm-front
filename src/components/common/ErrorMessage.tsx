/* eslint-disable react/prop-types */
import { ExclamationCircleOutlined } from '../../src/node_modules/@ant-design/icons';
import styled from '../../src/node_modules/@types/styled-components';

type ErrorMessageProps = {
    message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => (
    <Wrapper>
        <ExclamationCircleOutlined />
        &nbsp;{message}
    </Wrapper>
);

const Wrapper = styled.div`
    color: red;
    font-size: 12px;
    svg {
        font-size: 14px;
    }
`;

export default ErrorMessage;
