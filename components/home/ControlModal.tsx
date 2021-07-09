import styled from 'styled-components';
import { Switch } from 'antd';
import { useState, useCallback, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../hooks/useInput';
import { ModalOverlay, CloseBtn } from '../../styles/styles';
import { controlModalClose } from '../../actions/modal';

type Props = {
    visible: boolean;
};

const ControlModal = ({ visible }: Props) => {
    const dispatch = useDispatch();
    const [BOD, setBOD] = useState(false);
    const [temperature, onChangeTemperature] = useInput('30');
    const [illuminance, setIlluminance] = useState(false);
    const [CO2, setCO2] = useState(false);

    const onChangeBOD = useCallback((checked: boolean) => {
        setBOD(checked);
    }, []);

    const onChangeIlluminance = useCallback((checked: boolean) => {
        setIlluminance(checked);
    }, []);

    const onChangeCO2 = useCallback((checked: boolean) => {
        setCO2(checked);
    }, []);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onClose();
    };

    const onClose = () => {
        dispatch(controlModalClose());
    };

    return (
        <>
            {visible && (
                <ModalOverlay>
                    <Modal>
                        <CloseBtn onClick={onClose}>x</CloseBtn>
                        <ModalTitle>실시간 제어</ModalTitle>
                        <ControlForm onSubmit={onSubmit}>
                            <div>
                                <span>급수 제어</span>
                                <Switch
                                    checkedChildren="ON"
                                    unCheckedChildren="OFF"
                                    checked={BOD}
                                    onChange={onChangeBOD}
                                />
                            </div>
                            <div>
                                <span>온도 제어</span>
                                <input
                                    type="number"
                                    min="24"
                                    max="35"
                                    step="0.1"
                                    value={temperature}
                                    onChange={onChangeTemperature}
                                    placeholder="설정할 온도를 입력해주세요."
                                />
                            </div>
                            <div>
                                <span>조도 제어</span>
                                <Switch
                                    checkedChildren="ON"
                                    unCheckedChildren="OFF"
                                    checked={illuminance}
                                    onChange={onChangeIlluminance}
                                />
                            </div>
                            <div>
                                <span>CO2 제어</span>
                                <Switch
                                    checkedChildren="ON"
                                    unCheckedChildren="OFF"
                                    checked={CO2}
                                    onChange={onChangeCO2}
                                />
                            </div>
                            <FormBtn type="submit">완료</FormBtn>
                        </ControlForm>
                    </Modal>
                </ModalOverlay>
            )}
        </>
    );
};

const ControlForm = styled.form`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 20px;
    width: 300px;
    height: 450px;
    & > div {
        span:first-child {
            font-size: 15px;
            font-weight: 600;
            margin-right: 50px;
        }
        input {
            width: 140px;
            border: none;
            border-bottom: 1px solid #b6da72;
            &:focus {
                outline: none;
            }
            &::placeholder {
                font-size: 11px;
            }
        }
        .ant-switch-checked {
            background-color: #b6da72;
        }
    }
`;

const Modal = styled.div`
    background: white;
    border-radius: 30px;
    padding: 10px 30px;
    width: 400px;
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default ControlModal;
