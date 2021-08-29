import { useSelector } from '../../src/node_modules/react-redux';
import { RootState } from '../../src/reducers';
import MyFarmPresenter from './MyFarmPresenter';

const MyFarmContainer = () => {
    const { isFarmListVisible } = useSelector((state: RootState) => state.modal);
    return <MyFarmPresenter isFarmListVisible={isFarmListVisible} />;
};
export default MyFarmContainer;
