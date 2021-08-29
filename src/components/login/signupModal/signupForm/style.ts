import styled from '../../../../src/node_modules/@types/styled-components';
import { Inputwrapper } from '../../../../src/styles/styles';

export const InputWrapper = styled(Inputwrapper)`
    justify-content: space-between;
`;

export const InputError = styled.div`
    position: absolute;
    left: 120px;
    top: 50px;
`;

export const Form = styled.form`
    /* border: 1px solid gray; */
    width: 400px;
    display: flex;
    flex-direction: column;
    margin: 0 30px;
`;
