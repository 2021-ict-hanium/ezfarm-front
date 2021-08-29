import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMyfarmDashboardRequest } from '../../actions/myFarm';
import { RootState } from '../../redux/modules/reducer';
import HomePresenter from './HomePresenter';

const HomeContainer = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { me } = useSelector((state: RootState) => state.user);
    const { myFarm } = useSelector((state: RootState) => state.myFarm);
    const { isControlModalVisible, isViewModalVisible, isFarmListVisible } = useSelector(
        (state: RootState) => state.modal,
    );

    useEffect(() => {
        if (!me) {
            router.push('/login');
        }
    }, [router, me]);

    useEffect(() => {
        if (myFarm) {
            dispatch(loadMyfarmDashboardRequest(myFarm.id));
        }
    }, [dispatch, myFarm]);

    return (
        <HomePresenter
            isFarmListVisible={isFarmListVisible as boolean}
            isControlModalVisible={isControlModalVisible as boolean}
            isViewModalVisible={isViewModalVisible as boolean}
        />
    );
};

// const SideImg = styled.img.attrs({
//     src: 'https://media.giphy.com/media/QBpgbQa08wJ1uPvF6P/giphy.gif',
//     // src: '/images/farmer.png',
// })`
//     position: absolute;
//     top: 200px;
//     right: -400px;
//     z-index: -1;
//     @media screen and (max-width: 1570px) {
//         display: none;
//     }
// `;

export default HomeContainer;
