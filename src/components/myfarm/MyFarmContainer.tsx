import { useSelector } from 'react-redux';
import { RootState } from '../../redux/modules/reducer';
import MyFarmPresenter from './MyFarmPresenter';

const MyFarmContainer = () => {
    const { isFarmListVisible } = useSelector((state: RootState) => state.modal);
    return <MyFarmPresenter isFarmListVisible={isFarmListVisible} />;
};
export default MyFarmContainer;
