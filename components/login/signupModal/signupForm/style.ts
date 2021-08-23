import styled from 'styled-components';
import { Inputwrapper } from '../../../../styles/styles';

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
