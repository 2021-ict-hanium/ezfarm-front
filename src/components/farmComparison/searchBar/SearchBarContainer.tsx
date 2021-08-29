import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOtherFarmRequest } from '../../../actions/otherFarm';
import { IfarmSearchCond } from '../../../interfaces/data/otherFarm';
import { RootState } from '../../../redux/modules/reducer';
import SearchBarPresenter from './SearchBarPresenter';

const SearchBarContainer = () => {
    const dispatch = useDispatch();
    const { addFavoriteFarmDone, removeFavoriteFarmDone } = useSelector((state: RootState) => state.otherFarm);
    const [farmGroup, setFarmGroup] = useState('');
    const [farmType, setFarmType] = useState('');
    const [cropType, setCropType] = useState('');
    const onChangeFarmGroup = (value: string) => {
        if (value) {
            setFarmGroup(value);
        } else {
            setFarmGroup('');
        }
    };
    const onChangeFarmType = (value: string) => {
        if (value) {
            setFarmType(value);
        } else {
            setFarmType('');
        }
    };
    const onChangeCropType = (value: string) => {
        if (value) {
            setCropType(value);
        } else {
            setCropType('');
        }
    };

    const onClick = useCallback(() => {
        const farmSearchCond: IfarmSearchCond = {};
        if (farmGroup) {
            farmSearchCond.farmGroup = farmGroup;
        }
        if (farmType) {
            farmSearchCond.farmType = farmType;
        }
        if (cropType) {
            farmSearchCond.cropType = cropType;
        }
        dispatch(loadOtherFarmRequest(farmSearchCond));
    }, [dispatch, farmGroup, farmType, cropType]);

    useEffect(() => {
        if (addFavoriteFarmDone || removeFavoriteFarmDone) {
            onClick();
        }
    }, [addFavoriteFarmDone, removeFavoriteFarmDone, onClick]);
    return (
        <SearchBarPresenter
            onChangeFarmGroup={onChangeFarmGroup}
            onChangeFarmType={onChangeFarmType}
            onChangeCropType={onChangeCropType}
            onClick={onClick}
        />
    );
};
export default SearchBarContainer;
