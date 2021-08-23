import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import moment from 'moment';
import { FormEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { farmEnrollModalClose } from '../../../actions/modal';
import { loadAllMyfarmRequest, addMyfarmClear, addMyfarmRequest } from '../../../actions/myFarm';
import useInput from '../../../hooks/useInput';
import { RootState } from '../../../reducers';
import { getToken } from '../../../sagas';
import FarmEnrollModalPresenter from './FarmEnrollModalPresenter';

const FarmEnrollModalContainer = () => {
    const dispatch = useDispatch();
    const { addMyfarmLoading, addMyfarmDone, addMyfarmError } = useSelector((state: RootState) => state.myFarm);

    const [name, changeName] = useInput('');
    const [address, changeAddress] = useInput('');
    const [phoneNumber, changePhoneNumber] = useInput('');
    const [farmType, changeFarmType] = useInput('');
    const [cropType, changeCropType] = useInput('');
    const [area, changeArea] = useInput('');
    const [startDate, setStartDate] = useState('');
    const [main, setMain] = useState(false);

    const onClose = useCallback(() => {
        dispatch(farmEnrollModalClose());
    }, [dispatch]);

    const onOk = useCallback(() => {
        dispatch(loadAllMyfarmRequest(getToken()));
        dispatch(addMyfarmClear());
        dispatch(farmEnrollModalClose());
    }, [dispatch]);

    const onChangeStartDate = (_: unknown, dateString: string) => {
        setStartDate(dateString);
    };

    const onChangeMain = (e: CheckboxChangeEvent) => {
        setMain(e.target.checked);
    };

    const disabledDate = (current: moment.Moment) => current < moment().subtract(1, 'days').endOf('day');

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(addMyfarmRequest({ name, address, phoneNumber, farmType, cropType, area, startDate, main }));
        },
        [dispatch, name, address, phoneNumber, farmType, cropType, area, startDate, main],
    );
    return (
        <FarmEnrollModalPresenter
            onOk={onOk}
            onClose={onClose}
            name={name}
            changeName={changeName}
            address={address}
            changeAddress={changeAddress}
            phoneNumber={phoneNumber}
            changePhoneNumber={changePhoneNumber}
            farmType={farmType}
            changeFarmType={changeFarmType}
            cropType={cropType}
            changeCropType={changeCropType}
            area={area}
            changeArea={changeArea}
            onChangeStartDate={onChangeStartDate}
            disabledDate={disabledDate}
            onChangeMain={onChangeMain}
            addMyfarmLoading={addMyfarmLoading}
            addMyfarmDone={addMyfarmDone}
            addMyfarmError={addMyfarmError}
            onSubmit={onSubmit}
        />
    );
};
export default FarmEnrollModalContainer;
