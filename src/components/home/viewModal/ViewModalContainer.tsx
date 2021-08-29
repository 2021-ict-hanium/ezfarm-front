import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewModalClose } from '../../../actions/modal';
import { loadFarmViewRequest } from '../../../actions/myFarm';
import { RootState } from '../../../redux/modules/reducer';
import ViewModalPresenter from './ViewModalPresenter';

const ViewModalContainer = () => {
    const dispatch = useDispatch();

    const { farmView, myFarm } = useSelector((state: RootState) => state.myFarm);

    const onClose = useCallback(() => {
        dispatch(viewModalClose());
    }, [dispatch]);

    // 이미지 로딩
    useEffect(() => {
        if (farmView === null) {
            dispatch(loadFarmViewRequest(myFarm.id));
        }
    }, [dispatch, farmView, myFarm.id]);

    return <ViewModalPresenter onClose={onClose} farmView={farmView} />;
};

export default ViewModalContainer;
