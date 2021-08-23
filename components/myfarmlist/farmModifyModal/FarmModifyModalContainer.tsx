import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import moment from 'moment';
import { useCallback, useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { farmModifyModalClose } from '../../../actions/modal';
import { loadAllMyfarmRequest, modifyMyfarmClear, modifyMyfarmRequest } from '../../../actions/myFarm';
import useInput from '../../../hooks/useInput';
import { IMyFarmInfo } from '../../../interfaces/data/myFarm';
import { RootState } from '../../../reducers';
import { getToken } from '../../../sagas';
import FarmModifyModalPresenter from './FarmModifyModalPresenter';

type Props = {
    farmInfo: IMyFarmInfo;
};

const FarmModifyModalContainer = ({ farmInfo }: Props) => {
    const dispatch = useDispatch();
    const { modifyMyfarmLoading, modifyMyfarmDone, modifyMyfarmError } = useSelector(
        (state: RootState) => state.myFarm,
    );

    const onClose = useCallback(() => {
        dispatch(farmModifyModalClose());
    }, [dispatch]);

    const onOk = useCallback(() => {
        dispatch(loadAllMyfarmRequest(getToken()));
        dispatch(modifyMyfarmClear());
        dispatch(farmModifyModalClose());
    }, [dispatch]);
    const [name, changeName] = useInput(farmInfo.name);
    const [address, changeAddress] = useInput(farmInfo.address);
    const [phoneNumber, changePhoneNumber] = useInput(farmInfo.phoneNumber);
    const [farmType, changeFarmType] = useInput(farmInfo.farmType);
    const [cropType, changeCropType] = useInput(farmInfo.cropType);
    const [area, changeArea] = useInput(farmInfo.area);
    const [startDate, setStartDate] = useState(farmInfo.startDate);
    const [main, setMain] = useState(farmInfo.main);

    const onChangeStartDate = (_: unknown, dateString: string) => {
        setStartDate(dateString);
    };

    const onChangeMain = (e: CheckboxChangeEvent) => {
        setMain(e.target.checked);
    };

    const disabledDate = (current: moment.Moment) =>
        current < moment(farmInfo.createdDate.substring(0, 10), 'YYYY-MM-DD').subtract(1, 'days').endOf('day');

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(
                modifyMyfarmRequest(farmInfo.id, {
                    name,
                    address,
                    phoneNumber,
                    farmType,
                    cropType,
                    area,
                    startDate,
                    main,
                }),
            );
        },
        [dispatch, farmInfo, name, address, phoneNumber, farmType, cropType, area, startDate, main],
    );

    return (
        <FarmModifyModalPresenter
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
            startDate={startDate}
            onChangeStartDate={onChangeStartDate}
            disabledDate={disabledDate}
            onChangeMain={onChangeMain}
            modifyMyfarmLoading={modifyMyfarmLoading}
            modifyMyfarmDone={modifyMyfarmDone}
            modifyMyfarmError={modifyMyfarmError}
            onSubmit={onSubmit}
        />
    );
};
export default FarmModifyModalContainer;
