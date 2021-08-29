import { useCallback, useEffect } from '../../../src/node_modules/@types/react';
import { useDispatch, useSelector } from '../../../src/node_modules/react-redux';
import { viewModalClose } from '../../../actions/modal';
import { loadFarmViewRequest } from '../../../actions/myFarm';
import { RootState } from '../../../src/reducers';
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
